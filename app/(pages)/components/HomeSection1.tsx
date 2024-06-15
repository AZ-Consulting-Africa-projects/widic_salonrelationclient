"use client"
import { Button } from "@/components/ui/button";
import { User, ArrowRight, ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation"
import GrandianButton from "./GradianButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/variante";


const HomeSection1 = () => {
    const router = useRouter()
    return (
        <motion.section
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        className="flex flex-col items-center space-y-4 justify-center md:h-screen h-[600px]  text-white bg-colorSecondary  ">
            <h1 className="text-xl font-extrabold">09 Août 2024</h1>
            <h1 className="md:text-7xl text-3xl font-bold text-center ">Salon de la relation </h1>
            <h1 className="md:text-6xl text-3xl font-bold text-center ">Client </h1>
            <h1 className="md:text-8xl text-3xl font-bold text-center "> </h1>
            <div className="flex items-center space-x-3">
                <User className="w-[20px] h-[20px]" />
            </div>

            <div className="relative top-10 flex flex-col space-y-10 items-center justify-center ">
                <GrandianButton action={() => {
                    router.push("/billet")
                }} title={"Achetez vos ticket"} />

                <div onClick={() => {
                    router.push("/#section2")
                }} className="relative top-10 animate-bounce w-10 h-10 border rounded-full items-center justify-center p-2" >
                    <ArrowDown />
                </div>

            </div>



        </motion.section>
    );
}

export default HomeSection1;