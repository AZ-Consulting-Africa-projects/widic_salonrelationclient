
"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useToast } from "@/components/ui/use-toast"
import { Accessibility, HandCoins, KeySquare, Mail, Phone, User } from "lucide-react";
import { Select, Space } from 'antd';
import ImageUpload from "@/components/ImageUpload";
import { useKKiaPay } from 'kkiapay-react';
import { UserModel } from "@/models/UserModel";
import { Api } from "@/app/api/Api";
import { SponsorModel } from "@/models/SponsorModel";
import { PaiementModel } from "@/models/PaiementModel";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logIn } from "@/redux/features/auth-slice";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

let amountLevel = ""

interface formProps {
  organisationName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  passwords: string;
  passwords2: string;
  amount: number;
}



export default function LarrenerRegistre() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState<formProps>(null as unknown as formProps)
  const { toast } = useToast()

  const router = useRouter();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");


  const onChange = (e: RadioChangeEvent) => {
    formik.values.presentation = String(e.target.value);
    setValue(e.target.value);
  };



  const formik = useFormik({
    initialValues: {
      logo: "",
      organisationName: '',
      capture: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      reference: '',
      presentation: '',
      domaine: '',
    },
    validationSchema: yup.object({
      organisationName: yup.string().required('Le nom de la société est obligatoire'),
      firstName: yup.string().required('Le prénom est obligatoire'),
      lastName: yup.string().required('Le nom est obligatoire'),
      email: yup.string().email('L\'email n\'est pas valide').required('L\'email est obligatoire'),
      phone: yup.string().required('Le numéro de téléphone est obligatoire'),
      reference: yup.string().required('La référence est obligatoire'),
      capture: yup.string().required('La capture est obligatoire'),
      domaine: yup.string().required('Le domaine est obligatoire'),
      presentation: yup.string().required('La présentation est obligatoire'),
      logo: yup.string().required('Le logo est obligatoire'),


    }),
    onSubmit: async (values) => {
      setLoading(true);

      if (image != "") {
            const sponsorModel = new SponsorModel(values.firstName, values.lastName, values.organisationName, values.logo, values.capture, values.email, Number(values.phone), values.reference, values.presentation, values.domaine);
            const resp = await Api.create("/api/sponsor", sponsorModel);
            //const res = await Api.create("/api/sendEmail", { email: values.email });
            //console.log(res);
            if (resp.ok) {
                toast({
                    title: "Enregistrement effectué avec succès",
                });
                //router.push('/');
                setLoading(false);
            } else {
                console.log(resp);
                toast({
                    title: "Une erreur est survenue lors de l enregistrement Reéssayer!!",
                    variant: "destructive",
                });
                setLoading(false);
          }

      } 
      else {
        toast({
          title: "Veuillez importer votre logo",
          variant: "destructive"
        });
        setLoading(false);
      }

    },
  });



  return (
    <div className="py-[100px]  px-4 flex bg-colorPrimay overflow-x-hidden hide-scrollbar text-white justify-center items-center">

      <div className='flex flex-col space-y-10 items-center'>

        <h1 className="font-bold hidden text-center text-[40px]  md:hidden">Logo</h1>


        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5 w-full md:w-[500px]">

          {/** logo */}
          <div className="flex flex-col text-white">
            <label htmlFor="" className={formik.errors.logo && formik.touched.logo ? 'text-red-600' : ''}>
              {formik.errors.logo && formik.touched.logo ? formik.errors.logo : ' Logo de la societé'} <span className="text-red-600">*</span>
            </label>


            <ImageUpload
            style="text-black boder border-colorSecondary"
              value={image}
              disable={isLoading}
              onChange={(url: string) => {
                if (url != "") {
                  setImage(url);
                  formik.values.logo = url;
                }

              }}
              onRemove={() => {
                setImage("");
                formik.values.logo = "";
              }}

            />
          </div>
          {/** names */}
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:content-between md:justify-between md:spce-x-3">
            {/**firste name */}
            <div className="flex flex-col">
              <label htmlFor="" className={formik.errors.firstName && formik.touched.firstName ? 'text-red-600' : ''}>
                {formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : 'Prénom'} <span className="text-red-600">*</span>
              </label>
              <Input type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              
                size="large"
                className=' w-full bg-transparent border-colorSecondary'
              />
            </div>

            {/**last name */}
            <div className="flex flex-col md:ml-3">
              <label htmlFor="" className={formik.errors.lastName && formik.touched.lastName ? 'text-red-600' : ''}>
                {formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : 'Nom'} <span className="text-red-600">*</span>
              </label>
              <Input type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 
                size="large"
                className=' w-full bg-transparent border-colorSecondary'
              />
            </div>
          </div>

          {/**email and phone  */}
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:content-between md:justify-between md:spce-x-3">
            {/** email */}
            <div className="flex flex-col w-full">
              <label htmlFor="" className={formik.errors.email && formik.touched.email ? 'text-red-600' : ''}>
                {formik.errors.email && formik.touched.email ? formik.errors.email : 'Email'} <span className="text-red-600">*</span>
              </label>
              <Input type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                size="large"
                className=' w-full bg-transparent border-colorSecondary'
              />
            </div>

            {/** phone */}
            <div className='flex flex-col self-center w-full md:ml-3'>
              <label className={formik.errors.phone && formik.touched.phone ? 'text-red-600' : ''}>{formik.errors.phone && formik.touched.phone ? formik.errors.phone : 'Numéro de téléphone'} <span className="text-red-600">*</span> </label>
              <Input
                type="tel"
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=' w-full bg-transparent border-colorSecondary'

                size="large"
              />
            </div>
          </div>

          {/**organisation name */}
          <div className="flex flex-col">
            <label htmlFor="" className={formik.errors.organisationName && formik.touched.organisationName ? 'text-red-600' : ''}>
              {formik.errors.organisationName && formik.touched.organisationName ? formik.errors.organisationName : 'Nom de la société'} <span className="text-red-600">*</span>
            </label>
            <Input type="text"
              name="organisationName"
              value={formik.values.organisationName}
              onChange={formik.handleChange}
              size="large"
              className=' w-full bg-transparent border-colorSecondary'
            />
          </div>

          {/**montant  */}
          <div className="flex flex-col">

            <label htmlFor="" className={formik.errors.domaine && formik.touched.domaine ? 'text-red-600' : ''}>
              {
                formik.errors.domaine && formik.touched.domaine ? formik.errors.domaine : "Domaine d'intervention"
              }
              <span className="text-red-600">*</span>
            </label>

            <Input type="text"
              name="domaine"
              value={formik.values.domaine}
              onChange={formik.handleChange}

              size="large"
              className=' w-full bg-transparent border-colorSecondary'
            />
          </div>

          <div>
            <label className={formik.errors.reference && formik.touched.reference ? "text-red-600" : ""}>
              {formik.errors.reference && formik.touched.reference ? formik.errors.reference : 'Référence de paiement (mobile money)'}
              <span className="text-red-600">*</span>
            </label>
            <Input type="text" name="reference" value={formik.values.reference} onChange={formik.handleChange} className='w-full bg-transparent border-colorSecondary' />
          </div>

          {/** capture de depo */}
          <div className="">
            <label htmlFor="" className={formik.errors.capture && formik.touched.capture ? 'text-red-600' : ''}>
              {formik.errors.capture && formik.touched.capture ? formik.errors.capture : ' Capture du dépot'}

              <span className="text-red-600">*</span>
            </label>

            <ImageUpload
              style="boder border-colorSecondary h-10 rounded-md text-black"
              value={image1}
              disable={loading}
              onChange={(url: string) => {
                if (url != "") {
                  setImage1(url);
                  formik.values.capture = url;
                }

              }}
              onRemove={() => {
                setImage1("");
                formik.values.capture = ""
              }}

            />
          </div>

          <div className="flex space-x-5 text-white">
            <label htmlFor="" className={formik.errors.presentation  ? 'text-red-600' : ''}>
              {formik.errors.presentation ? formik.errors.presentation : 'Une présentation à faire?'}

              <span className="text-red-600">*</span>
            </label>

            <Radio.Group onChange={onChange} value={value}>
              <Radio value={"OUI"} className="text-white">OUI</Radio>
              <Radio value={"NON"} className="text-white">NON</Radio>
            </Radio.Group>
          </div>






          <Button type="primary" size="large" htmlType='submit' className="w-[200px] self-center" loading={loading} >
            Validé
          </Button>
        </form>

        <div className="flex flex-col space-y-5">


        </div>
      </div>

    </div>
  )
}
