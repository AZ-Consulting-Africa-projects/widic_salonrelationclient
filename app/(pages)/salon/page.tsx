"use client"
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Salon() {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="bg-colorPrimay text-white flex flex-col space-y-10  py-[200px] px-4 md:px-[250px]">
         <h1 className="md:text-5xl text-2xl font-bold">Salon de la relation client</h1>

            <div className='flex flex-col space-y-20 md:w-[600px]'>
                <h1>
               
Le Salon de la Relation Client de WIDIC est un événement clé pour les entreprises de la région, 
fournissant un espace dédié aux échanges, à l'acquisition de connaissances et aux rencontres centrées sur 
les défis de la relation client. Cet événement offre une opportunité précieuse 
aux entreprises pour perfectionner leurs pratiques et explorer les dernières tendances et innovations dans ce domaine.
                </h1>

                <h1>
                Le salon offre aux entreprises l'opportunité de 
                rencontrer des exposants qui proposent des solutions 
                innovantes et des technologies de pointe pour optimiser leur gestion de la relation client.
                 Cela peut inclure des logiciels de CRM, des outils d'analyse de données, 
                 des chatbots, des plateformes de communication multicanal, et bien plus encore.
                </h1>


                <h1>
                Les conférences et les ateliers organisés lors du salon sont l'un des points forts
                 de l'événement. Ils permettent aux participants d'approfondir leurs connaissances sur 
                 les tendances émergentes, les stratégies gagnantes et les nouvelles approches 
                 en matière de relation client. Les experts du domaine partagent leurs 
                expériences et leurs meilleures pratiques, ce qui peut être une source 
                d'inspiration pour les entreprises en quête d'amélioration de leurs services.
                </h1>

            </div>

            <div className="flex flex-col space-y-5 items-center justify-center w-full">
                <h1 className='text-center text-2xl md:text-4xl font-bold'>
                Venez nous rejoindre sur le plus grand événement de la Relation Client de l’Ouest. 
                Rendez-vous le 13 février 2024 à la cité des Congrès de Nantes pour vivre ensemble une journée intense !
                </h1>

                <Button variant="outline" className=" bg-transparent hover:text-white hover:bg-[#86286A] rounded-3xl">
                    <h1>S'inscrire au salon</h1>
                    <ArrowRight />
                </Button>
            </div>
        </div>

    )
}