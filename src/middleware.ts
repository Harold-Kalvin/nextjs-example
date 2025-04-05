import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const authReservedRoutes = ["/profile"];
const unauthReservedRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isAuthReservedRoute = authReservedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );
  const isUnauthReservedRoutes = unauthReservedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );
  const sessionId = (await cookies()).get("sessionid")?.value;

  if (isAuthReservedRoute && !sessionId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isUnauthReservedRoutes && sessionId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
