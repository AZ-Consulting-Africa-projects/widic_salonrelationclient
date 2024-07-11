
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


let amountLevel = ""

interface formProps {
  organisationName: string;
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  phone: string;
  passwords: string;
  passwords2: string;
  amount: number;
}



export default function LarrenerRegistre({ params }: { params: { level: string } }) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState<formProps>(null as unknown as formProps)
  const { toast } = useToast()
  const {
    openKkiapayWidget,
    addKkiapayListener,
    removeKkiapayListener
  } = useKKiaPay();
  const router = useRouter();
  const dispatch = useDispatch();


  function open(firstName: string, lastName: string, email: string, phone: string, amount: number) {
    openKkiapayWidget({
      fullname: `${firstName} ${lastName}`,
      amount: amount,
      api_key: "3cb8ff60f18711eeae665f935f4f8891",
      sandbox: true,
      email: `${email}`,
      phone: "97000000",
    });
  }


  // ..... others components options
  async function successHandler(response: any) {
    const userModel = new UserModel(datas.firstName, datas.lastName, datas.email, "image", +datas.phone, "SPONSOR", "datas.passwords");
    const result = await Api.create('/api/user', userModel);

    if(result) {
      const sponsorModel = new SponsorModel(+result.id, datas.organisationName, datas.description, image);
      const result2 = await Api.create('/api/parrener', sponsorModel);

      if(result2) {
        const paiementModel = new PaiementModel(+datas.amount, "SPONSORPAID", +result2.id);
        const result3 = await Api.create('/api/paiement', paiementModel);

        if(result3)
        toast({
          title: "Votre inscription a été effectué avec succès",
        });
        dispatch(logIn(result.id));
        router.push('/')
        setLoading(false);

      }else {
        toast({
          title: "Un problème est survenu reéssayer!!",
          variant: "destructive"
        });
        setLoading(false);
      }

    } else {
      toast({
        title: "Un problème est survenu reéssayer!!",
        variant: "destructive"
      });
      setLoading(false);
    }
    
  }

  function failureHandler(error: any) {
    console.log(error);
  }


  useEffect(() => {
    addKkiapayListener('success', successHandler)
    addKkiapayListener('failed', failureHandler)

    return () => {
      removeKkiapayListener('success')
      removeKkiapayListener('failed')
    };
  }, [addKkiapayListener, removeKkiapayListener, datas]);

  const level = params.level;

  if (level == "platine") {
    amountLevel = "Saisisez un montant a partider de  1000 000 FCFA"
  }
  else if (level == "or") {
    amountLevel = "Saisisser un montant entre 500 000 et 700000 FCFA"
  }
  else {
    amountLevel = "Saisisser un montant entre 300000 et 499000 FCFA"
  }


  const formik = useFormik({
    initialValues: {
      organisationName: '',
      description: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      amount: '',
    },
    validationSchema: yup.object({
      organisationName: yup.string().required('Le nom de l organisation est obligatoire'),
      firstName: yup.string().required('Le prénom est obligatoire'),
      lastName: yup.string().required('Le nom est obligatoire'),
      email: yup.string().email('Le format de l\'email est incorrect').required('L\'email est obligatoire'),
      phone: yup.string().required('Le numéro  est obligatoire'),
      
      description: yup.string().required('La description est obligatoire'),
      amount: yup.number().required('Le montant est obligatoire'),

    }),
    onSubmit: (values) => {
      setLoading(true);

      if (image != "") {
        //si l'utilisateur choisi le niveau platine action a effectuer
        if (level == "platine") {

          if (+values.amount >= 1000000) {
            setDatas(values as unknown as formProps);
            open(values.firstName, values.lastName, values.email, values.phone, +values.amount)

          } else {
            toast({
              title: "Le montant doit être supérient ou égale a 1000 000",
              variant: "destructive"
            });
            setLoading(false);
          }

        }
        //si l'utilisateur choisi le niveau or action a effectuer

        else if (level == "or") {
          if (+values.amount >= 500000 && +values.amount <= 700000) {
            setDatas(values as unknown as formProps);
            open(values.firstName, values.lastName, values.email, values.phone, +values.amount)

          } else {
            toast({
              title: "Le montant doit être comprise entre 500 000 et 700000",
              variant: "destructive"
            });
            setLoading(false);
          }
        }
        //si l'utilisateur choisi le niveau argent action a effectuer

        else {

          if (+values.amount >= 300000 && +values.amount <= 499000) {
            setDatas(values as unknown as formProps);
            open(values.firstName, values.lastName, values.email, values.phone, +values.amount)

          } else {
            toast({
              title: "Le montant doit être comprise entre 300000 et 499000",
              variant: "destructive"
            });
            setLoading(false);
          }
        }

      } else {
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

        <h1 className='text-3xl font-bold text-center'>S'inscrire en tant que <br /> Sponsor de niveau {level} </h1>

        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5 w-full md:w-[500px]">

          {/** logo */}
          <div className="flex flex-col text-black">
            <label htmlFor="" className={'text-white'}>
              Logo de l'organisation <span className="text-red-600">*</span>
            </label>

            <ImageUpload
              value={image}
              disable={isLoading}
              onChange={(url: string) => {
                if (url != "") {
                  setImage(url);
                }

              }}
              onRemove={() => {
                setImage("");
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
                prefix={<User />}
                size="large"
                className=' w-full'
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
                prefix={<User />}
                size="large"
                className=' w-full'
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
                prefix={<Mail />}
                size="large"
                className=' w-full'
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
                className=' w-full'
                prefix={<Phone />}
                size="large"
              />
            </div>
          </div>

          {/**organisation name */}
          <div className="flex flex-col">
            <label htmlFor="" className={formik.errors.organisationName && formik.touched.organisationName ? 'text-red-600' : ''}>
              {formik.errors.organisationName && formik.touched.organisationName ? formik.errors.organisationName : 'Nom de votre organisation'} <span className="text-red-600">*</span>
            </label>
            <Input type="text"
              name="organisationName"
              value={formik.values.organisationName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefix={<Accessibility />}
              size="large"
              className=' w-full'
            />
          </div>

          {/**montant  */}
          <div className="flex flex-col">

            <label htmlFor="" className={formik.errors.amount && formik.touched.amount ? 'text-red-600' : ''}>
              {
                formik.errors.amount && formik.touched.amount ? formik.errors.amount : amountLevel


              }
              <span className="text-red-600">*</span>
            </label>
            <Input type="number"
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              prefix={<HandCoins />}
              size="large"
              className=' w-full'
            />
          </div>


          {/**description */}
          <div className="flex flex-col">
            <label htmlFor="" className={formik.errors.description && formik.touched.description ? 'text-red-600' : ''}>
              {formik.errors.description && formik.touched.description ? formik.errors.description : 'Donner une brève description de votre organisation et du produit'} <span className="text-red-600">*</span>
            </label>
            <Input type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="large"
              className=' w-full h-[150px]'
            />
          </div>
          {/**password 
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:content-between md:justify-between md:spce-x-3">
            <div className='flex flex-col self-center w-full'>
              <label className={formik.errors.passwords && formik.touched.passwords ? 'text-red-600' : ''}>{formik.errors.passwords && formik.touched.passwords ? formik.errors.passwords : 'Mot de passe'} <span className="text-red-600">*</span> </label>

              <Input.Password
                value={formik.values.passwords}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='passwords'
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className=' w-full'
                prefix={<KeySquare />}
                size="large"
              />
            </div>

            <div className='flex flex-col self-center w-full md:ml-3'>
              <label className={formik.errors.passwords2 && formik.touched.passwords2 ? 'text-red-600' : ''}>
                {formik.errors.passwords2 && formik.touched.passwords2 ? formik.errors.passwords2 : 'Confirmer le Mot de passe'} <span className="text-red-600">*</span>
              </label>

              <Input.Password
                value={formik.values.passwords2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='passwords2'
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className=' w-full'
                prefix={<KeySquare />}
                size="large"
              />
            </div>
          </div>*/}


          <Button type="primary" size="large" htmlType='submit' className="w-[200px] self-center" loading={loading} >
            S'inscrire
          </Button>
        </form>

        <div className="flex flex-col space-y-5">


        </div>
      </div>

    </div>
  )
}
