"use client";
import React from 'react';
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2'


type Props = {
    onClick?: React.MouseEventHandler
}

export default function ContactMe({ onClick }: Props) {
    const sweetalert = 
        Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
  return (
    <div className='h-screen flex relative flex-row  max-md:flex-col justify-center space-x-12 max-md:space-x-0 items-center'>
    {/* <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center'> */}
        <h3 className='titulos'>
            Contacto
        </h3>

        {/* Datos personales */}        
            {/* <div className='flex flex-col space-y-7 px-2 max-w-lg' > */}
            <div className='flex flex-col space-y-7 px-2 max-md:mb-7'>
                <div>
                    <h4 className='text-xl font-semibold text-center '>
                        Tengo justo lo que usted necesita <br />
                        <span className='decoration-[#F7AB0A]/50 underline'>Contácteme</span>
                    </h4>
                </div>
                <div className='ml-8 space-y-5'>
                    <div className='flex items-center space-x-5 justify-start'>
                        <a href="https://api.whatsapp.com/send/?phone=34604124841&text=Hola+Luciano%2C+he+visto+tu+curriculum+vitae+y+quer%C3%ADa+ponerme+en+contacto+contigo+por+una+oferta+de+trabajo.&type=phone_number&app_absent=0" target="_blank" className='flex space-x-5'>
                            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                            <p className='text-xl'>+ 34 604 12 48 41</p>
                            </a>
                    </div>
        
                    <div className='flex items-center space-x-5 justify-start'>
                            <a href='mailto:llemos@uoc.edu?subject=Oferta%20de%20trabajo&body=Hola%20Luciano,%20he%20visto%20tu%20curriculum%20vitae%20y%20quer%C3%ADa%20ponerme%20en%20contacto%20contigo%20por%20una%20oferta%20de%20trabajo.%0BPuedes%20ponerte%20en%20contacto%20con%20nosotros%20a%20trav%C3%A9s%20de%3A%0B%09Mail:%20[%20Completar%20]%0B%09Tel%C3%A9fono:%20[%20Completar%20]%0B%09Horarios:%20[%20Completar%20]%0B%0BMuchas%20gracias%20por%20tu%20tiempo%0B%0BSaludos' className='flex space-x-5'>
                            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                            <p className='text-xl'>llemos@uoc.edu</p>
                            </a>
                    </div>
                        {/* 
                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-[#F7AB0A] h-7 w-7'/>
                            <p className='text-xl'>Las Palmas de Gran Canaria</p>
                        </div> */}
                    </div >
                </div>

            <div className='max-md:w-96'>
                <form action="https://formsubmit.co/llemos@uoc.edu" method="POST"
                className='flex flex-col space-y-2 mx-auto'>
                {/* className='flex flex-col space-y-2 w-fit mx-auto'> */}
                    <div className='flex space-x-2 max-md:flex-col max-md:space-y-2 max-md:space-x-0'>
                        <input type="text" placeholder="Nombre" name="nombre" className="contactInput"  />
                        <input type="email" placeholder="email"  name="email" className="contactInput"  />
                    </div>
                    <input type="text" placeholder="Motivo" name="motivo"  className="contactInput"  />
                    <textarea name="mensaje" placeholder="Mensaje"  className="contactInput" ></textarea>
                    <button
                        type="submit"
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'
                        onClick={(e:any) => sweetalert}
                        >
                            Enviar
                    </button>
                    {/* <!-- Luego de submit, nos dirige a la pagina deseada --> */}
                    <input type="hidden" name="_next" value="https://lucianolemos.vercel.app/"/>
                    {/* <!-- Quita el captcha de formsumit -->   */}
                    <input type="hidden" name="_captcha" value="false"/>
                </form>
            </div>
        </div>

  )
}