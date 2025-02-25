import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const role = request.cookies.get('role'); // Suponiendo que el rol del usuario también se almacena en las cookies

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verificar si la ruta es de administración y si el usuario no es administrador
  if (request.nextUrl.pathname.startsWith('/dashboard/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/dashboard/user', request.url)); // Redirigir a una página de no autorizado
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};