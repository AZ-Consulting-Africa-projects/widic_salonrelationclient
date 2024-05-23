
import bcrypt  from 'bcrypt';
import { Dto } from "@/DTO/Dto";
import { UserModel } from "@/models/UserModel";
import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const userModel: UserModel = body;
        userModel.password = await bcrypt.hash(String(userModel.password), 10);

        const dataValidate = Dto.userDto().validate(userModel);
        if (dataValidate.error) {
            return new Response(JSON.stringify(dataValidate.error.details), { status: 400 });
        }
        else {
            const user = await prismadb.user.create({ data: dataValidate.value });
            return NextResponse.json(user);
        }
        
    } catch (error) {
        console.log("user_POST", error);
        return new NextResponse('Internal error', { status: 500 });
    }

   
}
 export async function GET(req: Request) {
        try {
            const users = await prismadb.user.findMany();
            return NextResponse.json(users);
        } catch (error) {
            console.error('[getUsers]', error);
            return new NextResponse('Internal error', { status: 500 });
        }
    }