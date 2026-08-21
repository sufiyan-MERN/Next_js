import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import UserModel from "@/models/userModel"
import { connect } from "@/db/dbConfig"

connect()

export async function GET(request) {
 const token= request.cookies.get("token")?.value
 if(!token){
    return NextResponse.json({
        success:false,
        msg:"unauthorized: login requried token"
    },{
        status:401
    })
 }
 
 const payload= jwt.verify(token,JWT_SECRET)

 const userId=payload.id

 if(!userId){
    return NextResponse.json({
        success:false,
        msg:"invalid token payload"
    },{
        status:401
    })
 }

 const userData= await UserModel.findOne({_id:userId}).select("-password")
return NextResponse.json({
    success:true,
    data:userData
})
}