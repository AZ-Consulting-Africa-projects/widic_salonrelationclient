"use client"
import { Button } from "@/components/ui/button";
import { User, ArrowRight, ArrowDown } from "lucide-react";
import { useState } from 'react';

interface Props {
    action: any;
    title: string;
    style?: string;
}

const GrandianButton = ({ action, title, style}: Props) => {
    return (
        //hover le bg devien blanc
        <Button onClick={action} className={style+"  flex space-x-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[50px] transition ease-in-out delay-200 duration-50  hover:text-black hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white"}>

            <h1>{title} </h1>
            <ArrowRight />
        </Button>

    );
}
export default GrandianButton;