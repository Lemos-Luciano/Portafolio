"use client";
import React from 'react';
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center px-10 justify-evenly items-center'>
    {/* <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center'> */}
        <h3 className='absolute top-20 uppercase tracking-[20px] max-md:tracking-[10px] text-gray-500 text-2xl'>
            Contacto
        </h3>

        {/* Datos personales */}
        <div className='flex flex-col space-y-7 max-md:space-y-3 max-xl:space-y-5 px-32' >
            <h4 className='grid text-4xl max-xl:text-2xl max-md:text-base font-semibold text-center '>
                Tengo justo lo que usted necesita.
                <span className='decoration-[#F7AB0A]/50 underline'>Contácteme</span>
            </h4>
            <div className='space-y-5 max-xl:space-y-2 max-md:space-y-1'>
                <div className='flex items-center space-x-5 justify-center mx-10'>
                <a href="https://api.whatsapp.com/send/?phone=34604124841&text=Hola+Luciano%2C+he+visto+tu+curriculum+vitae+y+quer%C3%ADa+ponerme+en+contacto+contigo+por+una+oferta+de+trabajo.&type=phone_number&app_absent=0" target="_blank" className='flex space-x-5'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse max-md:h-3 max-md:w-3'/>
                    <p className='text-2xl max-xl:text-base max-md:text-sm'>+ 34 604 12 48 41</p>
                    </a>
                </div>
 
                <div className='flex items-center space-x-5 justify-center'>
                    <a href='mailto:llemos@uoc.edu?subject=Oferta%20de%20trabajo&body=Hola%20Luciano,%20he%20visto%20tu%20curriculum%20vitae%20y%20quer%C3%ADa%20ponerme%20en%20contacto%20contigo%20por%20una%20oferta%20de%20trabajo.%0BPuedes%20ponerte%20en%20contacto%20con%20nosotros%20a%20trav%C3%A9s%20de%3A%0B%09Mail:%20[%20Completar%20]%0B%09Tel%C3%A9fono:%20[%20Completar%20]%0B%09Horarios:%20[%20Completar%20]%0B%0BMuchas%20gracias%20por%20tu%20tiempo%0B%0BSaludos' className='flex space-x-5'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse max-md:h-3 max-md:w-3'/>
                    <p className='text-2xl max-xl:text-base max-md:text-sm'>llemos@uoc.edu</p>
                    </a>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse max-md:h-3 max-md:w-3'/>
                    <p className='text-2xl max-xl:text-base max-md:text-sm'>Las Palmas de Gran Canaria</p>
                </div>
            </div>

            <div >
                <form action="https://formsubmit.co/llemos@uoc.edu" method="POST"
                className='flex flex-col space-y-2 w-fit mx-auto'>
                {/* className='flex flex-col space-y-2 w-fit mx-auto'> */}
                    <div className='flex space-x-2 max-md:flex-col max-md:space-y-2 max-md:space-x-0'>
                        <input type="text" placeholder="Nombre" name="nombre" className="contactInput"  />
                        <input type="email" placeholder="email"  name="email" className="contactInput"  />
                    </div>
                    <input type="text" placeholder="Motivo" name="motivo"  className="contactInput"  />
                    <textarea name="mensaje" placeholder="Mensaje"  className="contactInput" ></textarea>
                    <button
                        type="submit"
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Enviar
                    </button>
                    {/* <!-- Luego de submit, nos dirige a la pagina deseada --> */}
                    <input type="hidden" name="_next" value="https://lucianolemos.vercel.app/"/>
                    {/* <!-- Quita el captcha de formsumit -->   */}
                    <input type="hidden" name="_captcha" value="false"/>
                </form>
            </div>

        </div>
    </div>
  )
}