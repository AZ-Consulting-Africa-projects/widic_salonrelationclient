import { Dto } from "@/DTO/Dto";
import { SponsorModel } from "@/models/SponsorModel";
import prismadb from "@/prisma/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const sponsorModel: SponsorModel = body;
        
        const dataValidate = Dto.sponsorDto().validate(sponsorModel);
        if (dataValidate.error) {
            return  Response.json({msg: dataValidate.error.details,  status: 400, ok: false });
        }else {
            const sponsor = await prismadb.sponsor.create({data: dataValidate.value });
            return NextResponse.json({sponsor: sponsor, ok: true, status: 200});
        }
    } catch (error) {
        console.log("parener_post", error)
        return  NextResponse.json({ms:`Internal error ${error}`,  status: 500, ok: false });
    }
}

export async function GET(req: Request) {
    try {
        const sponsor = await prismadb.sponsor.findMany();
        return NextResponse.json(sponsor);
    } catch (error) {
        console.error('[sponsor]', error);
        return new NextResponse('Internal error', { status: 500 });
    }
}