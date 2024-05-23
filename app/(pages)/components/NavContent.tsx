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




interface Props {
    styles: string;
}

const NavContent = ({ styles }: Props) => {
    return (
        <NavigationMenu className="hidden md:flex">


            <NavigationMenuList className={styles}>
            <NavigationMenuItem>        
                    <NavigationMenuLink href="/" className=" text-white cursor-pointer hover:text-pink-300">Acceuil</NavigationMenuLink>

                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-pink-300">
                        Le salon
                    </NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <div className="w-[350px] p-4 bg-white flex flex-col space-y-5">
                           {/*  <Link href="/salon" className="cursor-pointer hover:text-pink-300">Salon</Link>*/}
                            <Link href="/organisateurs" className="cursor-pointer hover:text-pink-300">Les organisateurs</Link>
                            <Link href="/edition-precedent" className="cursor-pointer hover:text-pink-300">Retour sur les édition précédantes</Link>
                            <Link href="/exposants" className="cursor-pointer hover:text-pink-300">Les exposants</Link>
                            <Link href="/info" className="cursor-pointer hover:text-pink-300">Informations pratiques</Link>

                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                

                <NavigationMenuItem>
                    <NavigationMenuLink href="/partenaire" className=" text-white cursor-pointer hover:text-pink-300"> Devenir partenaire</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/programme" className=" text-white cursor-pointer hover:text-pink-300">Le programme</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/billet" className=" text-white cursor-pointer hover:text-pink-300">Acheter votre ticket</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className=" text-white cursor-pointer hover:text-pink-300">Contact</NavigationMenuLink>

                </NavigationMenuItem>




            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavContent;