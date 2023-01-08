// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import nookies from "nookies";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("diamond_token");

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home", "/points/create"],
};
