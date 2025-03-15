import { NextResponse } from 'next/server';

/**
 * API endpoint that uses the Clear-Site-Data header to help browsers
 * clear site data including cookies, cache, and storage.
 * Used for development and testing purposes.
 */
export async function GET() {
  return new NextResponse('Site data cleared', {
    status: 200,
    headers: {
      'Clear-Site-Data': '"cache", "cookies", "storage", "executionContexts"',
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store, max-age=0, must-revalidate'
    },
  });
}

// Support OPTIONS for CORS 
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
  });
} 