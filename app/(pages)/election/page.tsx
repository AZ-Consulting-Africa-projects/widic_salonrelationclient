"use client"
import Image from "next/image"
export default function Election() {
    return (
        <div className="flex flex-col overflow-x-hidden hide-scrollbar">
            <div className="w-full py-[200px]  px-4 md:px-[280px] h-[250px] text-white bg-gradient-to-r from-colorPrimay via-sky-500 to-colorSecondary">
                <h1 className="md:text-4xl text-2xl   font-bold">
                    L'election du meilleur service client au Togo en 2024
                </h1>
            </div>

            <div className="flex flex-col space-y-20 py-20 px-4 md:px-0 items-center justify-center  bg-colorPrimay text-white">

                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 items-center">

                    <Image src={"/icons/vote.png"} alt={"eletion"} width={250} height={250} className="object-cover" />

                    <div className="flex flex-col md:w-[600px]">

                        <h1 className="text-2xl font-bold">Élection du Meilleur Service Client</h1>

                        <p className=" text-justify">
                            Lors du Salon de la Relation Client, nous avons
                            le plaisir d'annoncer l'élection du Meilleur Service Client.
                            Cet événement prestigieux offre aux participants l'opportunité de
                            reconnaître et de célébrer les entreprises qui se distinguent par
                            l'excellence de leur service client.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 items-center">

                <Image src={"/icons/societe.png"} alt={"eletion"} width={250} height={250} className="object-cover md:hidden flex" />


                    <div className="flex flex-col md:w-[600px]">

                        <h1 className="text-2xl font-bold">Comment Participer ?</h1>

                        <p className=" text-justify">
                            Les participants auront la possibilité de voter pour
                            leur service client préféré grâce à un système de vote innovant.
                            Chaque visiteur recevra un code QR unique
                            qui leur permettra de voter facilement et rapidement depuis leur smartphone.

                            <br />  <br /> 
                            Scanner le code QR : Chaque participant recevra un code QR à l'entrée du salon.
                            Sélectionner votre choix : Utilisez le code QR pour accéder à la plateforme de vote en ligne.
                            Voter : Choisissez l'entreprise que vous estimez offrir le meilleur service client et soumettez votre vote.
                            Pourquoi Voter ?

                            <br /> <br /> 

                            Votre vote contribue à récompenser les entreprises qui
                            investissent dans l'amélioration de l'expérience client et à promouvoir
                            les meilleures pratiques dans le secteur. C'est aussi une excellente occasion de
                            faire entendre votre voix et d'influencer les standards de qualité du service client.
                        </p>
                    </div>
                    <Image src={"/icons/societe.png"} alt={"eletion"} width={250} height={250} className="object-cover hidden md:flex" />
                </div>


                <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 items-center">

                    <Image src={"/icons/decerner.png"} alt={"eletion"} width={250} height={250} className="object-cover" />

                    <div className="flex flex-col md:w-[600px]">

                        <h1 className="text-2xl font-bold">Résultats</h1>

                        <p className=" text-justify">
                        Les résultats de l'élection seront annoncés lors de 
                        la cérémonie de clôture du salon. Les entreprises gagnantes 
                        recevront un trophée et une reconnaissance publique pour 
                        leur engagement envers l'excellence du service client. <br />  <br />

                        Participez et faites partie de cette initiative visant 
                        à élever les standards de la relation client !
                        </p>
                    </div>
                </div>



            </div>

        </div>
    )
}