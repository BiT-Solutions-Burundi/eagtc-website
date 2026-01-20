import { NextRequest, NextResponse } from "next/server";

/**
 * In-memory rate limiting store
 * Maps IP addresses to their last submission timestamp
 */
const rateLimitStore = new Map<string, number>();

/**
 * Rate limit window in milliseconds (30 seconds)
 */
const RATE_LIMIT_WINDOW = 30 * 1000;

/**
 * Get client IP from request headers
 */
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

/**
 * Check if the client is rate limited
 */
function isRateLimited(ip: string): boolean {
  const lastSubmission = rateLimitStore.get(ip);
  if (!lastSubmission) return false;
  
  const timeSinceLastSubmission = Date.now() - lastSubmission;
  return timeSinceLastSubmission < RATE_LIMIT_WINDOW;
}

/**
 * POST /api/contact
 * Handles contact form submissions with basic rate limiting
 */
export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);

    // Check rate limit
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Veuillez patienter 30 secondes avant de soumettre à nouveau." 
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { nom, entreprise, email, telephone, message } = body;

    // Basic validation
    if (!nom || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Les champs nom, email et message sont requis." 
        },
        { status: 400 }
      );
    }

    // Log the contact submission (in production, this would send an email or save to database)
    console.log("Contact form submission:", {
      nom,
      entreprise: entreprise || "Non spécifié",
      email,
      telephone: telephone || "Non spécifié",
      message,
      timestamp: new Date().toISOString(),
      ip: clientIP,
    });

    // Update rate limit store
    rateLimitStore.set(clientIP, Date.now());

    // Clean up old entries (older than 1 minute)
    const oneMinuteAgo = Date.now() - 60 * 1000;
    for (const [ip, timestamp] of rateLimitStore.entries()) {
      if (timestamp < oneMinuteAgo) {
        rateLimitStore.delete(ip);
      }
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Merci pour votre message. Nous vous répondrons sous 24 heures." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Une erreur est survenue. Veuillez réessayer." 
      },
      { status: 500 }
    );
  }
}
