import UserModel from "@/models/userModel";
import { connect } from "@/db/dbConfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

connect();

export async function POST(request) {
  try {
    const body = await request.json();

    console.log("body recieved at signup endpoint:: ", body)

    const { email, username, password } = body;

    const foundUser=await UserModel.findOne({email})
    if(foundUser){
      return NextResponse.json({
        msg:"user already exist"
      },{
        status:400
      })
    }
    const salt=await bcryptjs.genSalt(10)
    const hashedPassword= await bcryptjs.hash(password,salt)

    const feedback = await UserModel.create({
      email,
      password: hashedPassword ,
      username,
    });

    console.log("user saved in db from signup", feedback);

    return NextResponse.json({
      message: "user registered successfully",
      feedback,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong while signup",
      error
    })
  }
}
