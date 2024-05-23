import { Dto } from '@/DTO/Dto';
import { PaiementModel } from './../../../models/PaiementModel';
import prismadb from '@/prisma/prismadb';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const paiementModel: PaiementModel = body;

        const dataValidate = Dto.paiementDto().validate(paiementModel);
        if (dataValidate.error) {
            return new Response(JSON.stringify(dataValidate.error.details), { status: 400 });
        }else {
            const paiement = await prismadb.paiement.create({data: dataValidate.value });
            return NextResponse.json(paiement);
        }
    } catch (error) {
        console.error("paiement_post", error);
        return new NextResponse('Internal error', { status: 500 });
    }
}