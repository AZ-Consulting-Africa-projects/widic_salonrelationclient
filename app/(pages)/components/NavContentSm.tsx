"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link"
import { useRouter } from "next/navigation";


const NavContentSm = () => {
    const route = useRouter();
    return (
        <div className="flex flex-col space-y-5">
        
            <div onClick={() => {
                route.push('/organisateurs')
            }} className="cursor-pointer hover:text-pink-300">Les organisateurs</div>


            
             <div onClick={() => {
                route.push('/edition-precedent')
            }} className="cursor-pointer hover:text-pink-300">Salon de la realtion Client 1ere édition</div>


             <div onClick={() => {
                route.push('/exposants')
            }} className="cursor-pointer hover:text-pink-300">Les exposants</div>


             <div onClick={() => {
                route.push('/info')
            }} className="cursor-pointer hover:text-pink-300">Informations pratiques</div>


            
            <div onClick={() => {
                route.push('/partenaire')
            }} className="cursor-pointer hover:text-pink-300">Devenir partenaire</div>

            <div onClick={() => {
                route.push('/programme')
            }}  className="cursor-pointer  font-medium hover:text-pink-300">Le programme</div>


            <div onClick={() => {
                route.push('/billet')
            }}  className="cursor-pointer font-medium hover:text-pink-300">Réserver votre billet</div>

            <div onClick={() => {
                route.push('/contact')
            }} className="cursor-pointer font-medium  hover:text-pink-300">Contact</div>
        </div>
    )
}
export default NavContentSm;