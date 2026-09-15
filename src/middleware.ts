import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const slug = process.env.ADMIN_SLUG;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!slug) return NextResponse.next();

  if (pathname === `/${slug}`) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith(`/${slug}/`)) {
    const subPath = pathname.slice(`/${slug}`.length);
    const url = request.nextUrl.clone();
    url.pathname = `/admin${subPath}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/((?!api|_next|favicon.ico).*)"],
};
