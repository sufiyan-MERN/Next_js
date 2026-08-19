import UserModel from "@/models/userModel";
import { connect } from "@/db/dbConfig";
import { NextResponse } from "next/server";
  
connect();

export async function POST(request) {
  const body = await request.json();

  const { email, username, password } = body;

  const feedback = await UserModel.create({
    email,
    password,
    username,
  });
  console.log("user saved in db from signup", feedback);
  return NextResponse.json({
    message: "user registered successfully",
    feedback,
    success: true,
  });
}
