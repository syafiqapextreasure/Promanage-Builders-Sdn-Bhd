import { NextResponse, type NextRequest } from 'next/server';
import { SITE_URL } from './lib/seo';

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (hostname === 'www.promanagebuilders.com' || hostname === 'promanage-builders.mail-82f.workers.dev') {
    const destination = new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, SITE_URL);
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}
