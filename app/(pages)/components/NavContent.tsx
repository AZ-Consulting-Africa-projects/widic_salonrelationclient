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
                            <Link href="/ssalon" className="cursor-pointer hover:text-pink-300">Salon</Link>
                            <Link href="/organisateurs" className="cursor-pointer hover:text-pink-300">Les organisateurs</Link>
                            <Link href="/edition-precedent" className="cursor-pointer hover:text-pink-300">Retour sur les édition précédantes</Link>
                            <Link href="/exposants" className="cursor-pointer hover:text-pink-300">Les exposants</Link>
                            <Link href="/info" className="cursor-pointer hover:text-pink-300">Informations pratiques</Link>

                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-pink-300">
                        Devenir partenaire
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="  w-[350px] p-4 bg-white flex flex-col space-y-5">

                        <div className="w-[300px] p-4 bg-white flex flex-col space-y-5">
                            <Link href="/partenaire" className="cursor-pointer hover:text-pink-300">Pourquoi devenir partenaire</Link>
                            <Link href="/offre" className="cursor-pointer hover:text-pink-300">Les offres</Link>

                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/programme" className=" text-white cursor-pointer hover:text-pink-300">Le programme</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/billet" className=" text-white cursor-pointer hover:text-pink-300">Réserver votre billet</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className=" text-white cursor-pointer hover:text-pink-300">Prendre RDV avec un expert</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" className=" text-white cursor-pointer hover:text-pink-300">Contact</NavigationMenuLink>

                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className=" text-white cursor-pointer hover:text-pink-300">Blog</NavigationMenuLink>

                </NavigationMenuItem>



            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavContent;