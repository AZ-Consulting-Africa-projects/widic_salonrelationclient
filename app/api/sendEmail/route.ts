// pages/api/send-email.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: Request) {
    if (req.method === 'POST') {
        try {
            const data: any = await req.json();


            // Configurez le transporteur de Nodemailer
            const transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: parseInt(String(process.env.MAIL_PORT), 10),
                //secure: process.env.MAIL_PORT === '465',
                auth: {
                    user: process.env.MAIL_USER, // Utilisateur de l'email (configuré dans les variables d'environnement)
                    pass: process.env.MAIL_PASS, // Mot de passe de l'email (configuré dans les variables d'environnement)
                },
                
            });

            const mailOptions = {
                from: process.env.MAIL_USER,
                to: data.email,
                subject: "Retours suite a l\' inscription au salon de la relation client.",
                text: "Retours suite a l\' inscription au salon de la relation client",
                html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div>
      <h1>Bonjour</h1>
      <h1>Ce mail est la preuve pour recevoir votre ticket pour le dîner de la relation client.,</h1>
      <h1>Cordialement</h1>
    </div>
      </div>
    `,
            };


            const info = await transporter.sendMail(mailOptions);

            return NextResponse.json({ message: 'Email sent successfully', ok: true, status: 200, info: info });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: `Error sending email ${error}`, ok: false, status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method not allowed', ok: false, status: 405 });
    }
}