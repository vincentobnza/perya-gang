// middleware.ts
'use server'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';
import { apiUrl } from "@/lib/common";
import  useToken from "@/lib/hooks/useToken";
import { storeUserData } from './lib/hooks/useLocalStorage';

const auth = async () => {
    try {
        const Token = await useToken();
        const response = await axios.post(apiUrl("auth/user"), {},
            {
                headers: {
                    'X-Session-Token': `${Token.token}`,
                },
            }
        );
        return response
    } catch (error) {
        throw error
    }
}

export async function middleware(request: NextRequest) {
  const Token = await useToken();
  const url = request.nextUrl;
  const path = url.pathname;

  if (!Token) {
    return NextResponse.redirect(new URL('/login', url));
  }

  let user: any = null;
    try {
        
        const response = await auth();
        user = {
            status: true,
            f_: response.data.name,
            e_: response.data.email,
            u_: response.data.username,
            id_: response.data.id,
            roles: response.data.roles,
            balances: response.data.user_balance,
            token: Token.token,
        };
        
        axios.defaults.headers.common["X-Session-Token"] = user.token;

    } catch (err: any) {
        console.error('Auth check failed:', err);
        return NextResponse.redirect(new URL('/login', url));
    }

    if (!user || !user.roles?.name) {
        return NextResponse.redirect(new URL('/login', url));
    }

    const role = user.roles?.name;

    // Role-based redirects
    if (path.startsWith('/portal') && role === 'streamer') {
        return NextResponse.redirect(new URL('/streamer', url));
    }
   
    if (path.startsWith('/streamer') && role !== 'streamer') {
        return NextResponse.redirect(new URL('/portal', url));
    }

    return NextResponse.next(); // Let them in
}

export const config = {
    matcher: ['/portal/:path*', '/streamer/:path*'], // Middleware applies here
};
