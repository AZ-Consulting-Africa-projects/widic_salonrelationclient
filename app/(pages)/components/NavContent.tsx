"use cleint"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link"
import { usePathname } from "next/navigation";



interface Props {
    styles: string;
}

const NavContent = ({ styles }: Props) => {
    const pathName = usePathname();
    return (
        <NavigationMenu className="hidden md:flex">


            <NavigationMenuList className={styles}>
            <NavigationMenuItem>        
                    <NavigationMenuLink href="/" className={pathName == "/"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-white cursor-pointer hover:text-pink-300"}>Acceuil</NavigationMenuLink>

                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-pink-300">
                        Le salon
                    </NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <div className="w-[350px] p-4 bg-white flex flex-col space-y-5">
                           {/*  <Link href="/salon" className="cursor-pointer hover:text-pink-300">Salon</Link>*/}
                            <Link href="/organisateurs" className={pathName == "/organisateurs"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-black cursor-pointer hover:text-pink-300"}>Les organisateurs</Link>
                            <Link href="/edition-precedent" className={pathName == "/edition_precedent"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-black cursor-pointer hover:text-pink-300"}>Salon de la realtion Client 1ere édition</Link>
                            <Link href="/exposants" className={pathName == "/exposants"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-black cursor-pointer hover:text-pink-300"}>Les exposants</Link>
                           {/* <Link href="/info" className="cursor-pointer hover:text-pink-300">Informations pratiques</Link>*/}

                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                

                <NavigationMenuItem>
                    <NavigationMenuLink href="/partenaire" className={pathName == "/partenaire"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-white cursor-pointer hover:text-pink-300"}> Devenir partenaire</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/programme" className={pathName == "/programme"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-white cursor-pointer hover:text-pink-300"}>Le programme</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/billet" className={pathName == "/billet"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-white cursor-pointer hover:text-pink-300"}>Acheter votre ticket</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className={pathName == "/contact"? "text-blue-400 underline cursor-pointer hover:text-pink-300" : " text-white cursor-pointer hover:text-pink-300"}>Contact</NavigationMenuLink>

                </NavigationMenuItem>




            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavContent;