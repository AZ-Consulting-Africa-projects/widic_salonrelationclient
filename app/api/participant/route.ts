import { Dto } from "@/DTO/Dto";
import { ParticipantModel } from "@/models/participantModel";
import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const participantModel: ParticipantModel = body;
        
        const dataValidate = Dto.ParticipantDto().validate(participantModel);
        if (dataValidate.error) {
            return  Response.json({msg: dataValidate.error.details,  status: 400, ok: false });
        }else {
            const participant = await prismadb.participant.create({data: dataValidate.value });
            return NextResponse.json({participant: participant, ok: true, status: 200});
        }
    } catch (error) {
        console.log("parener_post", error)
        return  NextResponse.json({ms:`Internal error ${error}`,  status: 500, ok: false });
    }
}

export async function GET(req: Request) {
    try {
        const particiapant = await prismadb.participant.findMany();
        return NextResponse.json(particiapant);
    } catch (error) {
        console.error('[getUsers]', error);
        return new NextResponse('Internal error', { status: 500 });
    }
}