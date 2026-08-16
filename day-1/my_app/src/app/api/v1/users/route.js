import { UserModel } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const allUSers= await UserModel.find({})
        return NextResponse.json({
            msg:"get request received on /users route",
            data: allUSers
        })
    } catch (error) {
          return NextResponse.json(
            {
                msg: "failed to fetch users",
                error: error?.message || "Unknown error",
            },
            { status: 500 }
        );
    }
}