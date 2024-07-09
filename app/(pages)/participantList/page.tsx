"use client"
import { Api } from "@/app/api/Api";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ParticipantModel } from "@/models/participantModel";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function ParticipantList() {
    const [data, setData] = useState<ParticipantModel[]>([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<ParticipantModel[]>([]);


    useEffect(() => {
        Api.read('/api/participant').then((value) => {
            setData(value);
        })
    }, []);

    const searchFunction = (e: any) => {
        const searchTerm = e.target.value;
        if (searchTerm.trim() !== '') {
            setQuery(searchTerm);
            // Simulation d'une recherche avec un tableau de données statique
            const filteredResults = data.filter(item =>
                item.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setResults(filteredResults);
        }
        else {
            setQuery('');
            setResults([]);
        }

    }

    //tableau

    const tableConstruction = (data: ParticipantModel[]) => {
        return data.map((items) => (
            <TableRow key={items.id}>
                <TableCell className="">

                    <HoverCard>
                        <HoverCardTrigger className="flex items-center justify-center rounded-full">
                            <Image src={items.capture} alt="" width="40" height="40" className="object-cover" />
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <Image src={items.capture} alt="" width="240" height="240" className="object-cover" />
                        </HoverCardContent>
                    </HoverCard>


                </TableCell>

                <TableCell className="font-medium">{items.firstName} {items.lastName}</TableCell>
                <TableCell className="">{items.email}</TableCell>
                <TableCell className="">{items.phone}</TableCell>
                <TableCell className="text-right">{items.reference}</TableCell>
            </TableRow >
        ))
    }

    return (
        <div className="flex flex-col  space-y-20 py-[150px] px-4 md:px-[200px]  text-black">
            <div>

                <div className="flex items-center justify-center my-5">
                    <div className="flex space-x-3 items-center">
                        <Input className="md:w-[300px] w-[250px] "
                            placeholder={"Recherche pas Nom"}
                            value={query}
                            onChange={(e: any) => searchFunction(e)}
                        />
                        <Search className="text-blue-600" />
                    </div>

                </div>
                {/*table*/}
                <Table>
                    <TableCaption>Liste des participants.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Capture de dépot</TableHead>
                            <TableHead className="">Nom prénom</TableHead>
                            <TableHead className="">Email</TableHead>
                            <TableHead className="">Numéro de téléphone</TableHead>
                            <TableHead className="text-right">Référence de paiment</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            query == '' ? tableConstruction(data) : tableConstruction(results)
                        }
                    </TableBody>
                    <TableFooter>

                    </TableFooter>
                </Table>
            </div>
        </div>
    );
}