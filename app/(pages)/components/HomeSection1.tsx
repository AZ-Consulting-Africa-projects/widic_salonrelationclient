"use client"
import { Button } from "@/components/ui/button";
import { User, ArrowRight, ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation"


const HomeSection1 = () => {
    const router = useRouter()
    return (
        <section className="flex flex-col items-center space-y-4 justify-center md:h-screen h-[600px]  text-white bg-[#86286A]  ">
            <h1 className="text-xl font-extrabold">09 Août 2024</h1>
            <h1 className="md:text-8xl text-3xl font-bold text-center ">Structurez, développez </h1>
            <h1 className="md:text-8xl text-3xl font-bold text-center ">et optimisez votre </h1>
            <h1 className="md:text-8xl text-3xl font-bold text-center "> relation client</h1>
            <div className="flex items-center space-x-3">
                <User className="w-[20px] h-[20px]" />
                <h1 className="text-11 font-bold">Cité des Congrès de Nantes</h1>
            </div>

            <div className="relative top-10 flex flex-col space-y-10 items-center justify-center ">
                <Button className="flex space-x-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[50px] hover:bg-white hover:text-black">

                    <h1>Je réserve mon billet </h1>
                    <ArrowRight />
                </Button>

                <div onClick={() => {
                    router.push("/#section2")
                }} className="relative top-10 animate-bounce w-10 h-10 border rounded-full items-center justify-center p-2" >
                    <ArrowDown />
                </div>

            </div>



        </section>
    );
}

export default HomeSection1;