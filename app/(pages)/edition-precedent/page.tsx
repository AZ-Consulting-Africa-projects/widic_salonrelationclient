"use client"


import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion";
import { fadeIn } from "@/variante";

export default function EditionPrecedent() {
    return (
        <div className="flex flex-col ">

            <div className="w-full py-[200px] px-4 md:px-[280px] h-[350px] text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
                <h1 className="md:text-4xl text-2xl font-bold">Retour sur les éditions précédentes</h1>
            </div>

            <div className="flex flex-col space-y-20 py-20 px-4 md:px-[280px] bg-[#2b7186] text-white">
                <motion.h1
                 variants={fadeIn('down', 0.3)}
                 initial='hidden'
                 animate='show'
                className="md:text-4xl text-2xl font-bold">Salon de la relation client WIDIC GROUP</motion.h1>

                <motion.h1
                 variants={fadeIn('up', 0.3)}
                 initial='hidden'
                 whileInView='show'
                className="md:text-2xl text-xl font-bold ">Date : 12 Août 2023:</motion.h1>
                {/**section 1 */}
                <div className="flex flex-col space-y-20 items-center ">
                    {/** 1*/}
                    <motion.div
                     variants={fadeIn('right', 0.3)}
                     initial='hidden'
                     whileInView='show'
                    className="flex justify-between content-between">
                        <div className="flex flex-col w-full">
                            <h1 className="text-3xl font-bold ">+ de 150</h1>
                            <h1 className="text-[12px] font-light">Visiteurs</h1>
                        </div>

                        <div className="flex flex-col ">
                            <h1 className="text-3xl font-bold text-cyan-600">90%</h1>
                            <h1 className="text-[12px] font-light">des visiteurs sont satisfaits/très satisfaits par ces 3 éditions/salons passés</h1>
                        </div>
                    </motion.div>



                    <motion.div
                     variants={fadeIn('left', 0.3)}
                     initial='hidden'
                     whileInView='show'
                    className="flex  justify-between content-between">
                        <div className="flex flex-col w-full">
                            <h1 className="text-3xl font-bold text-red-400">5</h1>
                            <h1 className="text-[12px] font-light">conférences, ateliers et pitchs</h1>
                        </div>

                        <div className="flex flex-col ">
                            <h1 className="text-3xl font-bold text-blue-400">95%</h1>
                            <h1 className="text-[12px] font-light">des exposants sont satisfaits du déroulé de la journée</h1>
                        </div>
                    </motion.div>
                    {/**2 */}
                    <motion.div
                     variants={fadeIn('down', 0.3)}
                     initial='hidden'
                     whileInView='show'
                    className="flex justify-between content-between">
                        <div className="flex flex-col   w-full">
                            <h1 className="text-3xl font-bold text-blue-400">10 </h1>
                            <h1 className="text-[12px] font-light">exposant</h1>
                        </div>

                        <div className="flex flex-col  ">
                            <h1 className="text-3xl font-bold ">80%</h1>
                            <h1 className="text-[12px] font-light">des exposants sont satisfaits du ciblage des visiteurs</h1>
                        </div>
                    </motion.div>

                </div>

                <motion.h1
                 variants={fadeIn('down', 0.2)}
                 initial='hidden'
                 whileInView='show'
                className="md:text-4xl text-xl font-bold ">Pourquoi les visiteurs viennent  au Salon de la Relation Client de  WIDIC GROUP</motion.h1>
                <motion.div
                variants={fadeIn('left', 0.2)}
                initial='hidden'
                whileInView='show'
                className="flex items-center flex-col space-y-20 md:flex-row md:space-y-0 md:justify-between md:content-between">
                    {/**section 2 */}
                    <div className="l">
                        <ul className="list-outside  space-y-5">
                            <li className=""> Rencontrer les acteurs majeurs de la relation client</li>
                            <li className="">La qualité des contenus des conférences et ateliers</li>
                            <li className="">Mieux connaître les acteurs de la relation client de WIDIC</li>
                            <li className="">Découvrir des solutions techniques et des nouveaux services</li>

                        </ul>
                    </div>

                    {/**section 2 */}
                    <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView='show'
                    >
                        <Image src={"/images/event1.jpg"} alt="" width={450} height={450} className="object-cover content-center w-full " />
                    </motion.div>
                </motion.div>

                <motion.div
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView='show'
                className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:justify-between md:content-between items-center md:items-start">
                    {/**section 1 */}
                    <div className="md:w-full flex flex-col items-center space-y-5">
                        <Image src={"/icons/essai.png"} alt="" width={100} height={100} className="object-cover content-center" />
                        <h1 className="text-2xl  font-bold text-center">Profil du visitorat</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Direction relation client</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Direction marketing études</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Direction service commercial</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Direction générale</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Direction communication</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Direction service SAV/qualité</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center"></h1>


                    </div>

                    {/**section 1 */}
                    <div className="md:w-full flex flex-col items-center space-y-5">
                        <Image src={"/icons/parametres.png"} alt="" width={100} height={100} className="object-cover content-center" />
                        <h1 className="text-2xl font-bold text-center">Secteur d'activité</h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">Très varié </h1>
                        <h1 className="text-sm text-gray-400 font-bold text-center">
                            Direction service commercial

                            Direction générale

                            Direction communication

                            Direction service SAV/qualité

                            Secteur d'activité

                            Très varié

                            Assurance, banque, santé, IT et bâtiment, industrie, service…

                        </h1>

                    </div>

                </motion.div>
                <h1 className="md:text-2xl text-xl font-bold  text-center">Pourquoi les visiteurs viennent et reviennent au Salon de la Relation Client de l'Ouest</h1>


                <h1 className="md:text-2xl text-xl font-bold text-center">Témoignages</h1>


                <div>
               {/* <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>*/}
                </div>
            </div>



        </div>

    );
}
