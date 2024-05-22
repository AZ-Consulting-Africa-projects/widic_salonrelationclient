"use client"
import { Button } from '@/components/ui/button';
import { Watermark } from 'antd';
import { Flex, Progress } from 'antd';
import type { ProgressProps } from 'antd';
import Image from 'next/image';
import { useKKiaPay } from 'kkiapay-react';
import { useEffect } from 'react';



const data = [
    {
        type: "STANDART",
        price: "50000"
    },
    {
        type: "VIP",
        price: "100000"
    },
    

]

const TicketComponnet = () => {
    const { 
        openKkiapayWidget,
        addKkiapayListener,
        removeKkiapayListener
      } = useKKiaPay();

      function open() {
        openKkiapayWidget({
            fullname: `nom prenom`,
            amount: 10000,
            api_key: "3cb8ff60f18711eeae665f935f4f8891",
            sandbox: true,
            email: `email@gmail.com`,
            phone: "97000000",
        });
    }

      // ..... others components options
  function successHandler(response: any) {
    console.log(response);
  }
    
  function failureHandler(error: any) {
    console.log(error);
  }

  useEffect(() => {
    addKkiapayListener('success',successHandler)
    addKkiapayListener('failed', failureHandler)
    
    return () => {
      removeKkiapayListener('success')
      removeKkiapayListener('failed')
    };
  }, [addKkiapayListener,removeKkiapayListener]);

    return (
        <div id='ticket' className="flex flex-col space-y-10 items-center py-5 md:p-10  h-auto text-white rounded-2xl">
            <h1 className="font-extrabold text-3xl md:text-5xl">Achetez vos Tickets</h1>


            <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0  mt-5">
                {
                    data.map((item, index) => {
                        return (
                            <Watermark key={index} content="Salon de la Relation Client">
                                <div className="rounded-tl-3xl rounded-br-3xl bg-white text-black items-center p-5 md:py-10  md:w-[450px] h-auto flex flex-col space-y-16">
                                    <h1 className='font-bold text-3xl text-sky-600'>{item.type}</h1>

                                    <h1 className='font-extrabold text-5xl text-center text-orange-600'>{item.price} FCFA</h1>
                                    <div className=''>
                                        <Image src={'/logos/logo1.png'} alt={''} width={90} height={90} className='object-cover' />
                                        
                                    </div>
                                    <div>
                                            <h1 className="text-xl font-bold text-gray-800 text-center">Salon de la Relation Client</h1>
                                            <p className="text-sm text-gray-600 text-center">Date: 09 Août 2024</p>
                                            <p className="text-sm text-gray-600 text-center">Heure: 08:00 - 22:00</p>
                                            <p className="text-sm text-gray-600 text-center">Lieu: </p>
                                        </div>

                                    <Button onClick={() => {
                                        open();
                                    }} className='w-[250px] bg-orange-600 text-[30px] font-bold' size={"lg"} >
                                        Acheter
                                    </Button>

                                    <p className="text-sm text-gray-600">Tout Tax comprise</p>
                                </div>
                            </Watermark>
                        );
                    })
                }
            </div>



        </div>
    );
}
export default TicketComponnet;