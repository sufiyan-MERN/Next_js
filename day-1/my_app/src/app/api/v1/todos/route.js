import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        msg:"hello world"
    })
}

export function POST(){
    return NextResponse.json({
        msg:"POST request recivied on /todos route "
    })
}