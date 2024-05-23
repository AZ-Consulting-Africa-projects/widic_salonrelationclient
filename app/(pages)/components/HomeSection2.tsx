"use client"

import { fadeIn } from "@/variante";
import { motion } from "framer-motion";

const HomeSection2 = () => {
    return (
        <motion.section 
        variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView='show'
          exit='hidden' 
        id="section2" className=" md:space-x-10 h-1/5 px-4 md:px-0 items-center flex md:flex-row flex-col space-y-5 justify-center py-[150px]">
            <div className="bg-white shadow-xl rounded-lg p-5 justify-center flex items-end w-full md:w-[250px] h-[150px] ">
                <h1 className="text-center text-blue-600 text-xl font-bold">
                    + 0 participants
                </h1>
            
            </div>

            <div className="bg-white shadow-xl rounded-lg w-full md:w-[250px] justify-center flex items-end h-[180px]  p-5">
                <h1 className="text-center text-blue-600 text-xl font-bold">
                1 conférences, ateliers interactifs et démonstrations en direct
                </h1>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-5 justify-center flex items-end  w-full md:w-[250px] h-[150px] ">
                <h1 className="text-center text-blue-600 text-xl font-bold">
                0 exposants
                </h1>
            </div>
        </motion.section>
    );
}
export default HomeSection2;