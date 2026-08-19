import { UserModel } from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(req) {
    const body= await req.json()
    const {email,password}=body
    const foundUser= await UserModel.find({email:email})

    if(!foundUser){
        return NextResponse.json({
            msg:"invalid email or password"
        })
    }

    const isPasswordMatch= await bcrypt.compare(password,foundUser.password)
    if(!isPasswordMatch){
        return NextResponse.json({
            error:"invalid credentials"
        },{
            status:401
        })
    }
    
}