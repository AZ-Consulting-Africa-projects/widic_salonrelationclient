"use client"
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const data1 = [
    {
        
        name: "Mentions légales",
        link: "/",
    },
    {
        
        name: "RGPD",
        link: "/",
    },
];

const data2 = [
    {
                name: "Le salon",
        link: "/",
    },
    {
        
        name: "Réserver votre billet",
        link: "/",
    },
    {
        
        name: "Prendre RDV avec un expert",
        link: "/",
        },
    {
        
        name: "Blog",
        link: "/",

    },
    {
        
        name: "Contact",
        link: "/",

    },

]

const data3 = [
    {
               name: <Linkedin />,
        link: "/",

    },
    {
        
        name: <Instagram />,
        link: "/",

    },
    {
        
        name: <Twitter />,
        link: "/",


    }
]
const Footer = () => {
    return (
        <div className="bg-[#111343] w-full md:px-[250px] px-5 pt-20 pb-5 text-white relative bottom-0 flex flex-col space-y-10">
            <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:justify-between md:content-between w-full">
                <div className="flex flex-col space-y-5">
                    {
                        data1.map((items, index) => {
                            return (
                                <Link  className="text-[15px] text-gray-400 "href={items.link} key={index}> {items.name} </Link>
                            )
                        })
                    }
                </div>


                <div className="flex flex-col space-y-5">
                    {
                        data2.map((items, index) => {
                            return (
                                <Link className="text-[15px] text-gray-400 " href={items.link} key={index}> {items.name} </Link>
                            )
                        })
                    }
                </div>

                <div className="flex  space-x-5">
                    {
                        data3.map((items, index) => {
                            return (
                                <Link className="text-[15px] " href={items.link} key={index}> {items.name} </Link>
                            )
                        })
                    }
                </div>


            </div>

            <Separator className="w-full" />

            <h1 className="text-center text-[12px] text-gray-400">Copyright ©2024 Tous droits réservés </h1>
        
        </div>
    )
}

export default Footer;