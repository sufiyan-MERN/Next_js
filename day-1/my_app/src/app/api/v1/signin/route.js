import { UserModel } from "@/lib/mongodb"

export async function POST(req) {
    const body= await req.json()
    const {email,password}=body
    const foundUser= await UserModel.find()


}