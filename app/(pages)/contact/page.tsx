"use client"

import { Input } from "@/components/ui/input";
import GrandianButton from "../components/GradianButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/variante";
import * as YUP from 'yup';
import { useFormik } from "formik";
import { UserModel } from "@/models/UserModel";
import { Api } from "@/app/api/Api";
import { ProviderModel } from "@/models/ProviderModel";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/features/auth-slice";
import { useState } from "react";

export default function Contact() {
    const {toast} = useToast();
    const router = useRouter();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            entreprise: '',
            email: '',
            phone: '',
            message: ''
        },

        validationSchema: YUP.object({
            name: YUP.string().required('Le nom est obligatoire'),
            entreprise: YUP.string().required('L\'entreprise est obligatoire'),
            email: YUP.string().email('L\'email n\'est pas valide').required('L\'email est obligatoire'),
            phone: YUP.string().required('Le numéro de téléphone est obligatoire'),
            message: YUP.string().required('Le message est obligatoire')
        }),

        onSubmit: async  (values) => {
            const userModel = new UserModel(values.name, values.name, values.email, "image", +values.phone, "PANELIST", "values.passwords");
            const result = await Api.create('/api/user', userModel);
            if (result) {
                const providerModel = new ProviderModel(values.entreprise, "PANELIST", result.id);
      
                const result2 = await Api.create('/api/provider', providerModel);
      
                if (result2) {
                  toast({
                    title: "Inscription effectuée avec succès",
                  });
                  dispatch(logIn(result.id));
                  router.push('/')
                  setLoading(false);
                } else {
                  toast({
                    title: "Une erreur est survenue lors de l inscription Reéssayer!!",
                    variant: "destructive",
                  });
                  setLoading(false);
                }
              }
              else {
                toast({
                  title: "Une erreur est survenue lors de l inscription Reéssayer!!",
                  variant: "destructive",
                });
                setLoading(false);
              }   

            
           
        }
    })
    return (
        <div className="flex flex-col h-screen space-y-20 py-[150px] px-4 md:px-[280px] bg-[#2b7186] text-white">
            <div className="w-full flex flex-col space-y-8 items-center justify-center ">
                <motion.h1
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    animate='show'
                    className="text-center text-2xl font-bold">
                    Rejoignez nos panelistes
                </motion.h1>

                <motion.form
                    onSubmit={formik.handleSubmit}
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    animate='show'
                    className="md:w-[800px] w-full flex flex-col space-y-8 p-10 bg-[#225969] rounded-xl">

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col">
                            <label className="text-red-600">
                                {formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                            </label>
                            <Input value={formik.values.name} onChange={formik.handleChange} type="text" name="name" className="border-x-0 border-t-0 md:w-[300px] bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Nom complet" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-red-600">
                                {formik.errors.entreprise && formik.touched.entreprise ? formik.errors.entreprise : ''}
                            </label>
                            <Input value={formik.values.entreprise} onChange={formik.handleChange} type="text" name="entreprise" className="border-x-0 border-t-0 md:w-[300px] bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Nom de l'entreprise" />

                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col">
                            <label className="text-red-600">
                                {formik.errors.email && formik.touched.email ? formik.errors.email : ''}
                            </label>
                            <Input value={formik.values.email} onChange={formik.handleChange} type="email" name="email" className="border-x-0 border-t-0 md:w-[300px] bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Email" />

                        </div>

                        <div className="flex flex-col ">
                            <label className="text-red-600">
                                {formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}
                            </label>
                            <Input value={formik.values.phone} onChange={formik.handleChange} type="tel" name="phone" className=" md:w-[300px] border-x-0 border-t-0  bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Téléphone" />

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-red-600">
                            {formik.errors.message && formik.touched.message ? formik.errors.message : ''}
                        </label>
                        <Input value={formik.values.message} onChange={formik.handleChange} type="text" name="message" className="border-x-0 border-t-0  bg-transparent focus-visible:border-0 focus-visible:outline-none " placeholder="Message" />
                    </div>


                    <GrandianButton action={null} title="envoyer" style="w-[150px]" />
                </motion.form>
            </div>
        </div>
    );
}