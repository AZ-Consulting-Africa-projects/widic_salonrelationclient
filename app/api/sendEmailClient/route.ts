import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import {EmailTemplate} from '@/components/EmailTemplate';

const resend = new Resend("re_ZwjaLLFZ_GhPSxVannfMA4nX6JkeUPehA");//process.env.RESEND_API_KEY

export async function POST(req: Request) {
    try {
        const {email} = await req.json();
        const data = await resend.emails.send({
            from: 'salon de la relation client <onboarding@resend.dev>',
            to: email.toString(),
            subject: 'Retours suite a l\' inscription au salon de la relation client',
            react: EmailTemplate({ firstName: 'John' }),
            text: '',
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
