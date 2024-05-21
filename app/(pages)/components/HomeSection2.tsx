"use client"

const HomeSection2 = () => {
    return (
        <section id="section2" className=" md:space-x-10 h-1/5 px-4 md:px-0 items-center flex md:flex-row flex-col space-y-5 justify-center py-[150px]">
            <div className="bg-white shadow-xl rounded-lg p-5 justify-center flex items-end w-full md:w-[250px] h-[150px] ">
                <h1 className="text-center text-black text-xl font-bold">
                    + de 1 000 participants
                </h1>
            
            </div>

            <div className="bg-white shadow-xl rounded-lg w-full md:w-[250px] justify-center flex items-end h-[180px]  p-5">
                <h1 className="text-center text-black text-xl font-bold">
                26 conférences, ateliers participatifs et pitchs démos
                </h1>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-5 justify-center flex items-end  w-full md:w-[250px] h-[150px] ">
                <h1 className="text-center text-black text-xl font-bold">
                45 exposants
                </h1>
            </div>
        </section>
    );
}
export default HomeSection2;