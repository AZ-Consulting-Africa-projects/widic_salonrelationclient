"use client"
import { Button } from "@/components/ui/button";
import GrandianButton from "./GradianButton";
import { ArrowRight, Router } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef, LegacyRef } from "react";
import Image from "next/image";
import { fadeIn } from "@/variante";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}


const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2024-08-03T08:30:00').getTime();
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    } else {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
};


const HomeSection3 = () => {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
   const {toast} = useToast();
   const form = useRef<HTMLFormElement>();



    useEffect(() => {
      

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

     //fonction to send email
     const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm( "service_ne8iyfu" ,  "template_hpb9r8j", form.current!, {publicKey: 'zU_9B3POaiaWspEr4',})
            .then((result) => {
                toast({
                    description: "Email envoyer avec succès",
                })
            }, () => {
                toast({
                    variant: 'destructive',
                    description: "Un problème est survenu lors de l'envoi de l'email",

                })
            });
    };

    return (
        <section className="bg-colorPrimay h-auto py-[150px] px-3 md:px-[250px] w-full flex flex-col space-y-20 text-white">
            {/** rest of day */}
            <motion.div
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                exit='hidden'

                className="w-full flex space-x-1 md:space-x-8 items-center justify-center">
                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-400 flex flex-col items-center justify-center  ">
                    <div className="md:text-6xl font-bold">{timeLeft.days}</div>
                    <div className="text-gray-400 text-[12px] md:text-xl">Jours</div>
                </div>

                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-400 flex flex-col items-center justify-center  ">
                    <div className="md:text-6xl font-bold">{timeLeft.hours}</div>
                    <div className="text-gray-400 text-[12px] md:text-xl">Heures</div>
                </div>

                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-400 flex flex-col items-center justify-center  ">
                    <div className="md:text-6xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-gray-400 text-[12px] md:text-xl">Minutes</div>
                </div>

                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-400 flex flex-col items-center justify-center  ">
                    <div className="md:text-6xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-gray-400 text-[12px] md:text-xl">Secondes</div>
                </div>
            </motion.div>
            <Separator className="flex md:hidden w-full " />

            {/** rest of day */}
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView='show'
                exit='hidden'
                className="flex flex-col space-y-8 mt-10 md:w-[800px] ">
                <h1 className="md:text-4xl text-xl font-bold">
                    Les séminaires et les sessions de formation offerts pendant la conférence constituent l'un des moments phares de l'événement.
                </h1>

                <h1 className="md:text-xl text-sm font-bold">
                    Ils offrent aux participants l'opportunité d'approfondir leurs connaissances sur les tendances émergentes, les stratégies gagnantes, ainsi que sur les nouvelles approches en matière de relation client.
                </h1>

                <GrandianButton action={() => {
                    router.push('/programme')
                }} title="Découvrir le programme" style="w-[250px]" />
            </motion.div>
            <Separator className="flex md:hidden w-full relative top-3" />

            <div className="w-full flex flex-col space-y-8 items-center justify-center ">
                <h1 className="md:text-4xl text-2xl font-bold text-center">

                    La gestion de la relation client est au centre de vos préoccupations ? Rejoignez-nous en tant que partenaire du Salon de la Relation Client de WIDIC GROUP.
                </h1>

                <Button onClick={() => {
                    router.push('/partenaire')
                }} variant="outline" className=" bg-transparent hover:text-white hover:bg-[#86286A] rounded-3xl">
                    <h1>Devenir Sponsor </h1>
                    <ArrowRight />
                </Button>
            </div>
            <Separator className="flex md:hidden w-full " />


            {/** rest of day */}
            <div className="flex flex-col space-y-5 md:flex-row md:space-y-0  md:space-x-10 md:justify-between md:content-between items-center">
                <Image src="/images/footbg.jpg" alt="" width={350} height={350} className="object-cover content-center" />
                <div className="flex flex-col md:self-end space-y-8 mt-10 md:w-full  ">
                    <h1 className="md:text-4xl text-xl font-bold">
                        Une journée complète d'immersion au sein d'un écosystème entièrement dédié à la relation client.
                    </h1>

                    <GrandianButton action={() => {
                        router.push('/exposants')
                    }} title="les exposants" style="w-[250px]" />
                </div>
            </div>

            <Separator className="flex md:hidden w-full " />


            <div className="w-full flex flex-col space-y-8 items-center justify-center ">
                <h1 className="text-center text-2xl font-bold">Nous contacter</h1>

                <form ref={form as LegacyRef<HTMLFormElement> } onSubmit={sendEmail}  className="md:w-[800px] w-full text-black flex flex-col space-y-8 p-10 bg-gray-50 rounded-xl">
                    <Input type="text" name={"name"} required className="border-x-0 border-t-0 md:w-1/2 bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Nom" />
                    <Input type="email" name="email" required className="border-x-0 border-t-0  bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Message" />
                    <Input type="text" name="content" className="border-x-0 border-t-0 md:w-1/2 bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Email" />
                    <GrandianButton action={null} title="envoyer" style="w-[150px]" />
                </form>
            </div>


        </section>
    );
}

export default HomeSection3;