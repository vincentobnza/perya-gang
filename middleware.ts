"use server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";
import { apiUrl } from "@/lib/common";
import useToken from "@/lib/hooks/useToken";

const auth = async () => {
  try {
    const Token = await useToken();
    const response = await axios.post(
      apiUrl("auth/user"),
      {},
      {
        headers: {
          "X-Session-Token": `${Token.token}`,
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;

  const Token = await useToken();

  // Allow unauthenticated users to access login page
  if (!Token) {
    if (path !== "/login") {
      return NextResponse.redirect(new URL("/login", url));
    } else {
      return NextResponse.next(); // Allow access to /login
    }
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
    console.log("User authenticated:", user);
    axios.defaults.headers.common["X-Session-Token"] = user.token;
  } catch (err: any) {
    console.error("Auth check failed:", err);
    if (path !== "/login") {
      return NextResponse.redirect(new URL("/login", url));
    } else {
      return NextResponse.next(); // Allow access to /login even on failed auth
    }
  }

  if (!user || !user.roles?.name) {
    if (path !== "/login") {
      return NextResponse.redirect(new URL("/login", url));
    } else {
      return NextResponse.next();
    }
  }

  const role = user.roles?.name;

  const isLogin = path.startsWith("/login");
  const isPortal = path.startsWith("/portal");
  const isStreamer = path.startsWith("/streamer");

  if ((isPortal || isLogin) && role === "streamer") {
    return NextResponse.redirect(new URL("/streamer", url));
  }

  if ((isStreamer || isLogin) && role !== "streamer") {
    return NextResponse.redirect(new URL("/portal", url));
  }
  axios.defaults.headers.common["X-Session-Token"] = user.token;
  return NextResponse.next(); // Allow navigation
}

export const config = {
  matcher: ["/login", "/portal/:path*", "/streamer/:path*"],
};
