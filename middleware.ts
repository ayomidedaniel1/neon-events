import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   '/(.*)',
//   '/events/:id(.*)',
//   '/api/webhook/clerk(.*)',
//   '/api/webhook/stripe(.*)',
//   '/api/uploadthing(.*)'
// ]);

// ignoredRoutes: [
//   '/api/webhook/clerk',
//   '/api/webhook/stripe',
//   '/api/uploadthing'
// ]

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",

    // Skip Next.js internals and all static files, unless found in search params
    // '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    // '/(api|trpc)(.*)',
  ],
};