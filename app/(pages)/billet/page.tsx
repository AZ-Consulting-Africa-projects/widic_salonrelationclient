"use client"

import TicketComponnet from "../components/TicketComponents"

export default function Billet() {
    return (
        <div className="flex flex-col ">

            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[250px] text-white bg-gradient-to-r from-colorPrimay via-sky-500 to-colorSecondary">
                <h1 className="md:text-4xl text-2xl   font-bold">Ticket</h1>
            </div>

            <div className="flex flex-col space-y-20 py-20 px-4 md:px-[280px] bg-colorPrimay text-white">
                <TicketComponnet/>
            </div>

        </div>
    )
}

