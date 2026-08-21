import { NextResponse } from "next/server";

export async function GET() {
  console.log("we need to delete this cookies form browser");

  const response = NextResponse.json({
    msg: "logout successfull",
    success: true,
  });

  response.cookies.set({
    name: "token",
    value: "",
    httpOnly: true, // Prevents client-side JS from reading the cookie
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });
  return response
}
