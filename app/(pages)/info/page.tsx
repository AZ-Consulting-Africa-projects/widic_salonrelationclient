"use client"

export default function Info() {
    return (
        <div className="flex flex-col ">

            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[500px] text-white bg-gradient-to-r from-colorPrimay via-sky-500 to-colorSecondary">
                <h1 className="md:text-4xl text-2xl   font-bold">Salon - Information Prtiques</h1>
            </div>

            <div className="flex flex-col space-y-20 py-20 px-4 md:px-[280px] bg-colorPrimay text-white">

                <div className="flex flex-col space-y-5">
                    <h1 className="text-2xl md:text-4xl  font-bold">Horaires du salon</h1>
                    <div>
                        <h1 className="text-gray-400 text-[12px]">8h30: Ouverture du salon</h1>
                        <h1 className="text-gray-400 text-[12px]">22h30: fermeture du salon</h1>
                    </div>
                </div>

                <div>
                </div>

            </div>

        </div>
    )
}

