"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { fadeIn } from "@/variante"
import { motion } from "framer-motion"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"


const data = [
    
    {
        natio: "TOGOLAISE",
        image: "/images/IMG-20240125-WA0038-removebg-preview.png",
        name: "AKPELASSI E. KOSSIWA",
        title: "COMMUNICATION DIGITALE",
    },

    {
        natio: "TOGOLAISE",
        image: "/images/Yawo_Atiah-removebg-preview.png",
        name: "Ephrem Yawo Atiah",
        title: "Expert en Gestion de la Relation client , Digital solutions, promoteur du Salon de la Relation Client",
    },
    {
        natio: "TOGOLAISE",
        image: "/images/DSC_0982-removebg-preview.png",
        name: "N'FA Gnimna Alexie ",
        title: " Experte en formation-Support service client- Coach qualité",
    },
    {
        natio: "TOGOLAISE",
        image: "/images/eyram-removebg-preview.png",
        name: "HOUNTODJI Akouvi Eyram ",
        title: "Financière",
    },
    {
        natio: "TOGOLAISE",
        image: "/images/sadate-removebg-preview.png",
        name: "IBRAHIM K. El-Sadate ",
        title: " Spécialiste en Gestion de la Relation Client & Expérience Client || Formateur GRC",
    },


]


export default function Organisateurs() {
   

    return (
        <div className="flex flex-col  hide-scrollbar space-y-20 py-[120px] pb-[150px] px-4 md:px-20 bg-colorPrimay overflow-x-hidden hide-scrollbar text-white">
            <motion.h1
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            className="text-4xl font-bold text-center">
                Les Organisateurs
            </motion.h1>

            <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            className="flex flex-col items-center justify-center">
                <Carousel 
                 plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                    opts={{
                        align: "start",
                    }}
                    className="w-full">
                    <CarouselContent  className="">
                        {
                        data.map((items, index) => {
                            return (
                                <CarouselItem key={index} className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
                                    
                                   
                                    <Card className="bg-gray-100 p-3 w-[320px] h-[450px]">
                                        <CardContent className="flex flex-col space-y-3 items-center justify-center">
                                            
                                                <Image src={items.image == "" ? "/illustrations/profil3d.png" : items.image} alt="" width={130} height={130} className="object-cover content-center   rounded-full" />
                                                <h2 className="text-2xl font-bold text-center text-sky-600">{items.name}</h2>
                                                <h1 className="font-light text-gray-600 ">{items.natio}</h1>
                                                <p className="text-center">{items.title}</p>
                                            
                                        </CardContent>
                                    </Card>
                                   
                                </CarouselItem>
                            )
                        })
                        
                    }
                    </CarouselContent>
                   
                </Carousel>
            </motion.div>
        </div>
    )
}