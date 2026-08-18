import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function Proxy(request) {
  const token = await request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.rewrite(
      new URL("api/v1/auth/unauthorized", request.url),
    );
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.rewrite(
      new URl("api/v1/auth/unauthorized", request.url),
    );
  }
}

export const config = {
  matcher: [],
};
