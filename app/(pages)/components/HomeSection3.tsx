"use client"
import { Button } from "@/components/ui/button";
import GrandianButton from "./GradianButton";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date('2024-08-09T08:30:00').getTime();
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
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <section className="bg-[#151853] h-auto py-[150px] px-3 md:px-[250px] w-full flex flex-col space-y-20 text-white">
            {/** rest of day */}
            <div className="w-full flex space-x-1 md:space-x-8 items-center justify-center">
                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-500 flex flex-col items-center justify-center  ">
                    <h1 className="md:text-6xl font-bold">{timeLeft.days}</h1>
                    <h1 className="text-gray-500 text-[12px] md:text-xl">Jours</h1>
                </div>

                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-500 flex flex-col items-center justify-center  ">
                    <h1 className="md:text-6xl font-bold">{timeLeft.hours}</h1>
                    <h1 className="text-gray-500 text-[12px] md:text-xl">Heures</h1>
                </div>

                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-500 flex flex-col items-center justify-center  ">
                    <h1 className="md:text-6xl font-bold">{timeLeft.minutes}</h1>
                    <h1 className="text-gray-500 text-[12px] md:text-xl">Minutes</h1>
                </div>

                <div className="md:w-[150px] md:h-[150px] w-[80px] h-[80px] border border-gray-500 flex flex-col items-center justify-center  ">
                    <h1 className="md:text-6xl font-bold">{timeLeft.seconds}</h1>
                    <h1 className="text-gray-500 text-[12px] md:text-xl">Secondes</h1>
                </div>
            </div>
            <Separator  className="flex md:hidden w-full "/>

            {/** rest of day */}
            <div className="flex flex-col space-y-8 mt-10 md:w-[600px] ">
                <h1 className="md:text-4xl text-2xl font-bold">
                    Les conférences et les ateliers organisés lors du salon sont l'un des points forts de l'événement.
                </h1>

                <h1 className="md:text-xl text-lg font-bold">
                    Ils permettent aux participants d'approfondir leurs
                    connaissances sur les tendances émergentes, les stratégies
                    gagnantes et les nouvelles approches en matière de relation client.
                </h1>

                <GrandianButton action={null} title="Découvrir le programme" style="w-[300px]" />
            </div>
            <Separator  className="flex md:hidden w-full relative top-3"/>

            <div className="w-full flex flex-col space-y-8 items-center justify-center ">
                <h1 className="md:text-4xl text-2xl font-bold text-center">
                    La relation client est au cœur de votre stratégie ? Alors devenez partenaire du Salon de la Relation Client de l’Ouest.
                </h1>

                <Button variant="outline" className=" bg-transparent hover:text-white hover:bg-[#86286A] rounded-3xl">
                    <h1>Télécharger la pacquete partenaire </h1>
                    <ArrowRight />
                </Button>
            </div>
            <Separator  className="flex md:hidden w-full "/>


            {/** rest of day */}
            <div className="flex flex-col md:self-end space-y-8 mt-10 md:w-[600px] ">
                <h1 className="md:text-4xl text-xl font-bold">
                    Une journée d’immersion dans un écosystème dédié à la relation client
                </h1>

                <h1 className="md:text-xl text-md ">
                    Depuis 4 ans, le Salon de la Relation Client l’Ouest, c’est une occasion précieuse pour les entreprises d’améliorer leur démarche et de découvrir les dernières approches et innovations dans le domaine.
                </h1>

                <GrandianButton action={null} title="Voir tous les exposants" style="w-[300px]" />
            </div>
            <Separator  className="flex md:hidden w-full "/>


            <div className="w-full flex flex-col space-y-8 items-center justify-center ">
                <h1 className="text-center text-2xl font-bold">Inscrivez vous à notre newsletter Relation client</h1>

                <form className="md:w-[800px] flex flex-col space-y-8 p-8 bg-[#21245C] rounded-xl">
                    <Input type="nom" name="nom"  className="border-x-0 border-t-0 md:w-1/2 bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Nom"/>
                    <Input type="nom" name="nom"  className="border-x-0 border-t-0  bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Message"/>
                    <Input type="nom" name="nom"  className="border-x-0 border-t-0 md:w-1/2 bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Email"/>
                    <GrandianButton action={null} title="envoyer" style="w-[150px]" />
                </form>
            </div>


        </section>
    );
}

export default HomeSection3;