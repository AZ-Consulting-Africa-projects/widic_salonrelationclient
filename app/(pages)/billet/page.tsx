"use client"

import TicketComponnet from "../components/TicketComponents"

export default function Billet() {
    return (
        <div className="flex flex-col ">

            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[250px] text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500">
                <h1 className="md:text-4xl text-2xl   font-bold">Ticket</h1>
            </div>

            <div className="flex flex-col space-y-20 py-20 px-4 md:px-[280px] bg-[#2b7186] text-white">
                <TicketComponnet/>
            </div>

        </div>
    )
}

