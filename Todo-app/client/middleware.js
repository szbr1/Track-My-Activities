import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // Protect home route for unauthenticated users
  if (request.nextUrl.pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  // Prevent logged-in users from accessing signup or signin
  if ((request.nextUrl.pathname === '/signin' || request.nextUrl.pathname === '/signup') && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Otherwise allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/signin', '/signup']
};
