"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation";


const NavContentSm = () => {
    const route = useRouter();
    const pathName = usePathname();
    return (
        <div className="flex flex-col space-y-5">
        
            <div onClick={() => {
                route.push('/organisateurs')
            }} className={pathName == "/organisateurs" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Les organisateurs</div>


            
             <div onClick={() => {
                route.push('/edition-precedent')
            }} className={pathName == "/edition-precedent" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Salon de la realtion Client 1ere édition</div>


             <div onClick={() => {
                route.push('/exposants')
            }} className={pathName == "/exposants" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Les exposants</div>


             <div onClick={() => {
                route.push('/election')
            }} className={pathName == "/election" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Election du Meilleur Service Client</div>
       

            
            <div onClick={() => {
                route.push('/partenaire')
            }} className={pathName == "/partenaire" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Devenir partenaire</div>

            <div onClick={() => {
                route.push('/programme')
            }}  className={pathName == "/programme" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Le programme</div>


            <div onClick={() => {
                route.push('/billet')
            }}  className={pathName == "/billet" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Réserver votre billet</div>

            <div onClick={() => {
                route.push('/contact')
            }} className={pathName == "/contact" ? "cursor-pointer text-blue-400 underline hover:text-pink-300" : "cursor-pointer hover:text-pink-300"}>Contact</div>
        </div>
    )
}
export default NavContentSm;