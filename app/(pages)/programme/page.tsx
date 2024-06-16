"use client"

import { CalendarDays, Clock } from "lucide-react"
import GradianButton from "../components/GradianButton"
import { motion } from "framer-motion"
import { fadeIn } from "@/variante"

const data = [
    {
        title: "Instalation des stands et ouverture",
        heure: "8h30 à 9h30",

    },
    {
        title: "Visite, Coaching, presentation des solution et center d'appel",
        heure: "9h30 a 14h",

    },
    {
        title: "la grande conférence de la relation client",
        heure: "14h à 16h",

    },
    {
        title: "Réseautage",
        heure: "16h à 17h",

    },
    {
        title: "Dîner de la relation client",
        heure: "19h à 22h30",

    },
]

export default function Programme() {
    return (
        <div className="flex flex-col ">

            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[250px] text-white bg-gradient-to-r from-colorPrimay via-sky-500 to-colorSecondary">
                <h1 className="md:text-4xl text-2xl   font-bold">Programme</h1>
            </div>


            <div className="flex flex-col space-y-20 py-20 px-4 md:px-0 items-center justify-center  bg-colorPrimay text-white">

                <div className="w-[150px] h-auto flex flex-col  items-center justify-center  bg-green-950 rounded-xl p-3">

                    <h1 className="text-center font-bold">jours</h1>
                    <h1 className="text-center">03 Août 2024 </h1>
                </div>

                <div className="flex flex-col space-y-10">
                    {
                        data.map((items, index) => {
                            return (
                                <motion.div
                                variants={fadeIn('up', 0.3)}
                                initial='hidden'
                                whileInView='show'
                                key={index} className="border rounded-md py-10 px-4 flex md:w-[900px] items-center flex-col space-y-5 md:flex-row md:justify-between md:space-x-5 hover:border-orange-500 md:content-between md:px-20 ">

                                    <div className="w-full font-bold text-sm md:text-lg text-center">
                                        {items.title}
                                    </div>

                                    <div className="flex flex-col space-y-5 w-full sm:self-center">
                                        <div className="flex space-x-3">
                                            <CalendarDays className=" text-orange-400 " />
                                            <h1>Le 03-08-2024</h1>
                                        </div>

                                        <div className="flex space-x-3">
                                            <Clock className=" text-orange-400 " />
                                            <h1>{items.heure}</h1>
                                        </div>
                                    </div>

                                    <GradianButton title="En savoir plus" action={null} style="w-[200px]" />
                                </motion.div>
                            );
                        })
                    }

                </div>
            </div>
        </div>

    )

}