"use client"


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";

import Link from "next/link"
import NavContent from "./NavContent";
import NavContentSm from "./NavContentSm";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathName = usePathname();
    return (
        <div className="fixed top-0 w-full bg-gray-800 h-20 flex  items-center  justify-center">

            <Link href="/" className={pathName == "/" ? "md:hidden flex ml-5 items-center self-center w-auto text-blue-400 underline font-medium" : "md:hidden flex ml-5 items-center self-center w-auto text-white font-medium"}>ACCEUIL</Link>

            <div className='md:hidden w-full flex pr-5 items-end justify-end'>
                <Sheet>
                    <SheetTrigger>
                        <AlignJustify className="text-white" />
                    </SheetTrigger>

                    <SheetContent  >
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription>
                            </SheetDescription>
                        </SheetHeader>
                        <SheetClose asChild>
                            <div onClick={() => {
                                null
                            }}>
                                <NavContentSm />
                            </div>

                        </SheetClose>
                            

                    </SheetContent>
                </Sheet>
            </div>

            <NavContent styles="flex  space-x-5" />
        </div>
    )
}

export default Navbar;