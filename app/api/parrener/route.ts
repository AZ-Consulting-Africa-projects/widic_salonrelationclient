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
            return new Response(JSON.stringify(dataValidate.error.details), { status: 400 });
        }else {
            const sponsor = await prismadb.sponsor.create({data: dataValidate.value });
            return NextResponse.json(sponsor);
        }
    } catch (error) {
        console.log("parener_post", error)
        return new NextResponse('Internal error', { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const sponsors = await prismadb.sponsor.findMany();
        return NextResponse.json(sponsors);
    } catch (error) {
        console.error('[getUsers]', error);
        return new NextResponse('Internal error', { status: 500 });
    }
}