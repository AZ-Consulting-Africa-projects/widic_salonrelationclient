
"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ArrowRightSquare } from "lucide-react";
import type { StatisticProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variante";

export default function Info() {
    const route = useRouter();
    return (
        <div className="flex flex-col ">


            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[250px] text-white bg-gradient-to-r from-colorPrimay via-sky-500 to-colorSecondary">
                <h1 className="md:text-4xl text-2xl   font-bold">Devenir partenaire </h1>
            </div>

            <div className="flex flex-col space-y-20 items-center py-20 px-4 md:px-[280px] bg-colorPrimay ">
                <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between md:content-between md:space-x-20">

                    {/**card 1 */}
                    <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView='show'
                    exit='hidden'
                    className="  md:w-[430px] h-[300px] bg-white shadow-lg rounded-lg py-3 pl-10 flex flex-col space-y-5">
                        {/**head */}
                        <div className="flex justify-between content-between items-center">
                            <h1 className="font-bold text-cyan-600 text-[20px]">Niveau Platine</h1>

                            <Image src={"/icons/platine.png"}
                                alt="meet"
                                quality={100}
                                width={50}
                                height={50}
                                className="h-full bg-cover object-cover "
                            />

                        </div>

                        {/**content */}
                        <div>
                            <HoverCard>
                                <HoverCardTrigger className="flex flex-col space-y-1">
                                    <h1 className="text-[12px] md:text-[18px] text-start font-light">
                                        Stand Premium : Un stand spacieux et bien situé dans la salle
                                        d'exposition, avec une visibilité maximale pour attirer les
                                        participants.
                                        Sponsor Principal : Reconnaissance en tant que sponsor ....
                                    </h1>
                                    <h1 className="text-[18px] text-start font-semibold text-cyan-600">
                                        à partir de 1 000000 FCFA
                                    </h1>
                                    <Button onClick={() => {
                                        route.push('/parrener_registre/platine')
                                    }} size={"sm"}
                                        variant={"outline"}
                                        className="bg-cyan-600 text-white font-bold flex space-x-3 w-[210px]"
                                    >
                                        <h1>S'inscrire maintenant</h1>
                                        <ArrowRightSquare />
                                    </Button>
                                </HoverCardTrigger>

                                <HoverCardContent className="text-[12px]">
                                    Stand Premium : Un stand spacieux et bien situé dans la salle
                                    d'exposition, avec une visibilité maximale pour attirer les
                                    participants.
                                    • Sponsor Principal : Reconnaissance en tant que sponsor
                                    principal sur tous les supports marketing et promotionnels,
                                    y compris les affiches, les brochures, les sites web, et les
                                    annonces pendant le salon
                                    • Accès Exclusif : Accès exclusif aux sessions VIP, aux
                                    événements de réseautage de haut niveau et aux activités
                                    spéciales organisées pendant le salon
                                    • Mise en Avant : Mise en avant dans les discours d'ouverture
                                    et de clôture du salon, avec une mention spéciale et un
                                    remerciement pour le soutien en tant que sponsor principal
                                    • Vidéo Promotionnelle : Création et diffusion d'une vidéo
                                    pour présenter les grandes actions dans le domaine de la
                                    relation client ou le développement d'outils CRM, mettant en
                                    lumière les principaux sponsors
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </motion.div>

                    {/**card 2 */}
                    <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView='show'
                    exit='hidden'
                    className=" md:w-[430px] h-[300px] bg-white shadow-lg rounded-lg py-3 pl-10 flex flex-col space-y-5">
                        {/**head */}
                        <div className="flex justify-between content-between items-center">
                            <h1 className="font-bold text-orange-600 text-[20px]">Niveau Or</h1>

                            <Image src={"/icons/medaille-dor.png"}
                                alt="meet"
                                quality={100}
                                width={50}
                                height={50}
                                className="h-full bg-cover object-cover "
                            />

                        </div>

                        {/**content */}
                        <div>
                            <HoverCard>
                                <HoverCardTrigger className="flex flex-col space-y-1">
                                    <h1 className="text-[12px] md:text-[18px] text-start font-light">
                                        Stand Premium : Un stand spacieux et bien situé dans la
                                        salle d'exposition, avec une visibilité maximale pour attirer
                                        les participants.
                                        • Présence sur tous nos supports de communication ....
                                    </h1>
                                    <h1 className="text-[18px] text-start font-semibold text-orange-600">
                                        500 000 à
                                        700000 FCFA
                                    </h1>

                                    <Button onClick={() => {
                                        route.push('/parrener_registre/or')
                                    }} size={"sm"}
                                        variant={"outline"}
                                        className="bg-orange-600 text-white font-bold flex space-x-3 w-[210px]"
                                    >
                                        <h1>S'inscrire maintenant</h1>
                                        <ArrowRightSquare />
                                    </Button>
                                </HoverCardTrigger>

                                <HoverCardContent className="text-[12px]">
                                    Stand Premium : Un stand spacieux et bien situé dans la
                                    salle d'exposition, avec une visibilité maximale pour attirer
                                    les participants.
                                    • Présence sur tous nos supports de communication
                                    • Mise en Avant : Mise en avant dans les discours d'ouverture
                                    et de clôture du salon, avec une mention spéciale et un
                                    remerciement pour le soutien en tant que sponsor principal
                                    • Intervention d'un Représentant : Temps alloué pour qu'un
                                    représentant de l'entreprise parle de l'importance accordée
                                    à la gestion de la relation client et la conception de
                                    l'entreprise liée à la gestion clientèle, lors des sessions
                                    plénières ou des tables rondes.
                                    • Place VIP au Dîner : Une place à la table VIP lors du dîner de
                                    la relation client, offrant une occasion de réseautage de
                                    haut niveau avec d'autres leaders de l'industrie et des
                                    influenceurs clés.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </motion.div>

                </div>

                {/**card 3 */}
                <motion.div
                variants={fadeIn('up', 0.5)}
                initial='hidden'
                whileInView='show'
                exit='hidden'
                className=" md:w-[480px] h-[300px] bg-white shadow-lg rounded-lg py-3 pl-10 flex flex-col space-y-5">
                    {/**head */}
                    <div className="flex justify-between content-between items-center">
                        <h1 className="font-bold text-gray-600 text-[20px]">Niveau Argent</h1>

                        <Image src={"/icons/medaille-dargent.png"}
                            alt="meet"
                            quality={100}
                            width={50}
                            height={50}
                            className="h-full bg-cover object-cover "
                        />

                    </div>

                    {/**content */}
                    <div>
                        <HoverCard>
                            <HoverCardTrigger className="flex flex-col space-y-3">
                                <h1 className="text-[12px] md:text-[18px] text-start font-light">
                                    Présence sur nos supports de Communication et Marketing
                                    Un stand standard : Un stand de base mais fonctionnel dans
                                    la salle d'exposition, offrant une plate-forme pour....
                                </h1>

                                <h1 className="text-[18px] text-start font-semibold text-gray-600">
                                    300000 à
                                    499000 FCFA
                                </h1>

                                <Button onClick={() => {
                                    route.push('/parrener_registre/argent')
                                }} size={"sm"}
                                    variant={"outline"}
                                    className="bg-gray-600 text-white font-bold flex space-x-3 w-[210px]"
                                >
                                    <h1>S'inscrire maintenant</h1>
                                    <ArrowRightSquare />
                                </Button>
                            </HoverCardTrigger>

                            <HoverCardContent className="text-[12px]">
                                Présence sur nos supports de Communication et Marketing
                                Un stand standard : Un stand de base mais fonctionnel dans
                                la salle d'exposition, offrant une plate-forme pour présenter
                                les produits et services de l'entreprise.
                                • Mention dans le discours d'ouverture et de cloture pour
                                reconnaissance
                                • Opportunités de Réseautage : Occasions de réseautage
                                informel avec d'autres participants, exposants et
                                intervenants lors des pauses café et des événements
                                sociaux du salon
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </motion.div>


            </div>

        </div>
    )
}

