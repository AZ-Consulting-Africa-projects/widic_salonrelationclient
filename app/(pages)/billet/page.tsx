"use client"

import TicketComponnet from "../components/TicketComponents"

export default function Billet() {
    return (
        <div className="flex flex-col ">

            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[500px] text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <h1 className="md:text-4xl text-2xl   font-bold">Ticket</h1>
            </div>

            <div className="flex flex-col space-y-20 py-20 px-4 md:px-[280px] bg-[#151853] text-white">
                <TicketComponnet/>
            </div>

        </div>
    )
}

