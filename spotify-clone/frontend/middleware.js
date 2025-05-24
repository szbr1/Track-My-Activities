import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPrivateRoute = createRouteMatcher(['/auth-callback(.*)'])

export default clerkMiddleware(async(auth,req)=>{
  const {pathname} = req.nextUrl

  if(pathname === '/sso-callback'){
    const callbackUrl = req.nextUrl.clone()
    callbackUrl.pathname = '/auth-callback'
    return NextResponse.redirect(callbackUrl)
  }
  if(pathname === '/'){
    const callbackUrl = req.nextUrl.clone()
    callbackUrl.pathname = '/Home'
    return NextResponse.redirect(callbackUrl)
  }

    if(isPrivateRoute(req)){  await auth.protect()}
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}