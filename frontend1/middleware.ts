import { type NextRequest, NextResponse } from "next/server";
import { cookies as getCookies } from "next/headers";
import { decrypt } from "@lib/session";

export default async function middleware(request: NextRequest) {
  //1. Check if the path is protected
  const protectedRoutes = ["/admin", "/dashboard"]; // Add your protected routes here
  const currentPath = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentPath);

  if (isProtectedRoute) {
    //2. Check for valid session
    const cookieStore = await getCookies();
    const cookie = cookieStore.get("session")?.value;
    const session = await decrypt(cookie);

    //3.Redirect if session is invalid
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    //4. Render route
    return NextResponse.next();
  }

  // Here you can add additional logic to verify the session if needed
  // For example, checking the session's validity or user permissions

  return NextResponse.next();
}
