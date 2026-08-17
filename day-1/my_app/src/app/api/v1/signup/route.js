

import { UserModel } from "@/lib/mongodb"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST(req) {
    const body= await req.json()
    const {email,username,password}=body

    const existingUser=await UserModel.findOne({email:email})
    console.log(existingUser);
    if(existingUser){
        return NextResponse.json({
            msg:"user already exists"
        },{
            status:400
        })
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const feedback= await UserModel.create({
        email:email,
        username:username,
        password:hashedPassword
    })

    return NextResponse.json({
        msg:"user registered sucessfully",
        feedback
    },{
        status:201
    })
}