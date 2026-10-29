import { NextResponse, type NextRequest } from 'next/server';
import { SITE_URL } from './lib/seo';

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const publicHost = hostname === 'promanagebuilders.com' || hostname === 'www.promanagebuilders.com';
  if ((publicHost && request.nextUrl.protocol === 'http:') || hostname === 'www.promanagebuilders.com' || hostname === 'promanage-builders.mail-82f.workers.dev') {
    // Assign the path rather than resolving it as a URL, so even a double-slash
    // path cannot turn this into a redirect to another host.
    const destination = new URL(SITE_URL);
    destination.pathname = request.nextUrl.pathname;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}
