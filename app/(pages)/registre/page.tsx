"use client"

import * as Yup from 'yup';
import { useFormik } from "formik";
import { Input } from '@/components/ui/input';
import { Button } from 'antd';
import Image from "next/image"
import { ParticipantModel } from '@/models/participantModel';
import { Api } from '@/app/api/Api';
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ImageUpload from '@/components/ImageUpload';

export default function Registre() {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast();
    const router = useRouter();
    const [image, setImage] = useState("");


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            reference: '',
            capture: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Le prénom est obligatoire'),
            lastName: Yup.string().required('Le nom est obligatoire'),
            phone: Yup.string().required('Le numéro de téléphone est obligatoire'),
            email: Yup.string().email('L\'email n\'est pas valide').required('L\'email est obligatoire'),
            reference: Yup.string().required('La référence est obligatoire'),
            capture: Yup.string().required('La capture est obligatoire'),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            const particiapantModel = new ParticipantModel(values.firstName, values.lastName, values.email, +values.phone, values.reference, values.capture);
            //console.log(particiapantModel);

            const resp = await Api.create("/api/participant", particiapantModel);
            const res = await Api.create("/api/sendEmail", {email: values.email});
            //console.log(res);
            
            setLoading(false);
           if (resp.ok) {
                toast({
                    title: "Enregistrement effectué avec succès",
                });
                formik.initialValues = { firstName: "", lastName: "", phone: "", email: "", reference: "", capture: "" };
                router.push('/');
                setLoading(false);
            } else {
                console.log(resp);
                toast({
                    title: "Une erreur est survenue lors de l enregistrement Reéssayer!!",
                    variant: "destructive",
                });
                formik.initialValues = { firstName: "", lastName: "", phone: "", email: "", reference: "", capture: "" };
                setLoading(false);
            }


        }

    })
    return (
        <div className="flex flex-col  space-y-20 py-[150px] px-4 md:px-[200px]  text-colorPrimay">
            <section className="h-auto justify-center content-center">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center'>

                    {/** image */}
                    <div className="hidden md:flex">
                        <Image src="/illustrations/Sign up-pana (1).svg" alt="" width={500} height={500} priority quality={100} className="object-cover bg-center" />
                    </div>


                    <div className={"flex flex-col space-y-5"}>
                        <Image src="/logos/logo1.png" alt="" width={80} height={80} priority quality={100} className="object-cover bg-center flex self-center" />

                        <h1 className='text-colorPrimay font-medium text-center text-xl'>S'enregistrer Maintenant.</h1>

                        <form className="flex flex-col space-y-5" onSubmit={formik.handleSubmit}>


                            {/** nom et prenom */}
                            <div className='flex space-x-5'>

                                <div>
                                    <label className={formik.errors.firstName && formik.touched.firstName ? "text-red-600" : ""}>
                                        {formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : ' Prénom'}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <Input type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} className='' />

                                </div>

                                <div>
                                    <label className={formik.errors.lastName && formik.touched.lastName ? "text-red-600" : ""}>
                                        {formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : 'Nom'}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <Input type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} className='' />

                                </div>
                            </div>

                            {/** phone  input */}
                            <div>
                                <label className={formik.errors.phone && formik.touched.phone ? "text-red-600" : ""}>
                                    {formik.errors.phone && formik.touched.phone ? formik.errors.phone : 'Téléphone'}
                                    <span className="text-red-600">*</span>
                                </label>
                                <Input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} className='' />

                            </div>

                            {/** email input */}
                            <div>
                                <label className={formik.errors.email && formik.touched.email ? "text-red-600" : ""}>
                                    {formik.errors.email && formik.touched.email ? formik.errors.email : 'Email'}
                                    <span className="text-red-600">*</span>
                                </label>
                                <Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className='' />

                            </div>

                            <div>
                                <label className={formik.errors.reference && formik.touched.reference ? "text-red-600" : ""}>
                                    {formik.errors.reference && formik.touched.reference ? formik.errors.reference : 'Référence de paiement (mobile money)'}
                                    <span className="text-red-600">*</span>
                                </label>
                                <Input type="text" name="reference" value={formik.values.reference} onChange={formik.handleChange} className='' />
                            </div>

                            {/** logo */}
                            <div className="">
                                <label htmlFor="" className={formik.errors.capture && formik.touched.capture ? 'text-red-600' : ''}>
                                {formik.errors.capture && formik.touched.capture ? formik.errors.capture : ' Capture du dépot'}

                                    <span className="text-red-600">*</span>
                                </label>

                                <ImageUpload
                                    style="boder border-gray-400 h-10 rounded-md"
                                    value={image}
                                    disable={loading}
                                    onChange={(url: string) => {
                                        if (url != "") {
                                            setImage(url);
                                            formik.values.capture = url;
                                        }

                                    }}
                                    onRemove={() => {
                                        setImage("");
                                        formik.values.capture = ""
                                    }}

                                />
                            </div>



                            <Button loading={loading} htmlType="submit" className="bg-colorPrimay text-white font-bold md:w-[16rem] text-center  md:self-end">
                                <h1 className="text-center">Enregistrer</h1>
                            </Button>
                        </form>
                    </div>
                    {/** form */}

                </div>

            </section>
        </div>
    );
}