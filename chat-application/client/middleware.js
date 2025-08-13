import { NextResponse } from "next/server";


export const middleware = (request)=>{
    const token = request.cookies.get('token')?.value;

    if (
        ['/Home', '/profile'].includes(request.nextUrl.pathname) 
        && !token
      ) {
        return NextResponse.redirect(new URL('/signin', request.url));
      }
  if(request.nextUrl.pathname === '/'){

      return NextResponse.redirect(new URL('/Home', request.url))
    }
    if(request.nextUrl.pathname === '/signin'&& token){
        return NextResponse.redirect(new URL('/Home', request.url))
    }

    if(request.nextUrl.pathname === '/signup'&& token){
        return NextResponse.redirect(new URL('/Home', request.url))
    }
   
}

export const config ={
    matcher: ['/','/Home', '/signin','/signup', '/profile']
}