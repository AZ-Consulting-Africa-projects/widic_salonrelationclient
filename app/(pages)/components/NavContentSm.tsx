"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link"


const NavContentSm = () => {
    return (
        <div className="flex flex-col space-y-5">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="  hover:text-pink-300">Le salon</AccordionTrigger>
                    <AccordionContent className="flex flex-col space-y-3">
                        <Link href="/edition-precedent" className="cursor-pointer hover:text-pink-300">Retour sur les édition précédantes</Link>
                        <Link href="/exposants" className="cursor-pointer hover:text-pink-300">Les exposants</Link>
                        <Link href="/info" className="cursor-pointer hover:text-pink-300">Informations pratiques</Link>
                        <Link href="/organisateurs" className="cursor-pointer hover:text-pink-300">Les organisateurs</Link>
                        <Link href="/salon" className="cursor-pointer hover:text-pink-300">Salon</Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className=" hover:text-pink-300">Devenir partenaire</AccordionTrigger>
                    <AccordionContent className="flex flex-col space-y-3">
                        <Link href="/partenaire" className="cursor-pointer hover:text-pink-300">Pourquoi devenir partenaire</Link>
                        <Link href="/offre" className="cursor-pointer hover:text-pink-300">Les offres</Link>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Link href="/programme" className="cursor-pointer  font-medium hover:text-pink-300">Le programme</Link>
            <Link href="/billet" className="cursor-pointer font-medium hover:text-pink-300">Réserver votre billet</Link>

            <Link href="/contact" className="cursor-pointer font-medium  hover:text-pink-300">Prendre RDV avec un expert</Link>
            <Link href="/contact" className="cursor-pointer font-medium  hover:text-pink-300">Contact</Link>
            <Link href="/" className="cursor-pointer font-medium  hover:text-pink-300">Blog</Link>
        </div>
    )
}
export default NavContentSm;