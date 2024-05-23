import  prismadb  from '@/prisma/prismadb';
import { Dto } from "@/DTO/Dto";
import { ProviderModel } from "@/models/ProviderModel";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
   try {
    const body = await req.json();
    const providerModel: ProviderModel = body;

    const dataValidate = Dto.providerDto().validate(providerModel);

    if (dataValidate.error) {
        return new Response(JSON.stringify(dataValidate.error.details), { status: 400 });
    } else {
        const provider = await prismadb.provider.create({ data: dataValidate.value });
        return NextResponse.json(provider);
    }
   } catch (error) {
    console.error("provider_post", error)
    return new NextResponse('Internal error', { status: 500 });
   }
}


export async function GET() {
    try {
        const providers = await prismadb.provider.findMany();
        return NextResponse.json(providers);
    } catch (error) {
        console.error("provider_get", error)
        return new NextResponse('Internal error', { status: 500 });
    }
}