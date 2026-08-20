import UserModel from "@/models/userModel"
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { connect } from "@/db/dbConfig";

connect()

export async function POST(request) {
    const body = await request.json()
    const {email,password}=body

    const foundUser= await UserModel.findOne({email})
    if(!foundUser){
        console.log("user not registered but tries to login");
        return NextResponse.json({
            msg:"user not registered"
        },{
            status:400
        })
    }

    const isValidPassword= await bcryptjs.compare(password,foundUser.password)

    if(!isValidPassword){
        return NextResponse.json({
            msg:"invalid password"
        },{
            status:401
        })        
    }

    const payload={
        email:foundUser.email,
        id:foundUser._id,
        username:foundUser.username
    }

    const token= await jwt.sign(payload,process.env.JWT_SECRET)
    const response= NextResponse.json({
        msg:"signin successfully",
        success:true
    },{
        status:200
    })

    response.cookies.set({
        name:"token",
        value:token,
         httpOnly: true, // Prevents client-side JS from reading the cookie
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day in seconds
    })

    return response
}