import { NextResponse, type NextRequest } from "next/server";

// -----------//
// Auto redirect to "/" when url match "/api/profile-api/api"
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePrefence = request.cookies.get("theme");

  if (!themePrefence) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
}

// -----------//
// Auto redirect to "/" when url match "/api/profile-api/api"
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/api/profile-api/api",
// };
// ------------ //

// Rewrite => path /api/profile-api/api but content of "/api/hello"
// redirect => redirect to path /api/profile-api/api
// export function middleware(request: NextRequest) {
// if (request.nextUrl.pathname === "/api/profile-api/api")
//   return NextResponse.rewrite(new URL("/api/hello", request.url));
// }
