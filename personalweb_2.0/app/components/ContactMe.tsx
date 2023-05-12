"use client";
import React from 'react';
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contacto
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Tengo justo lo que usted necesita.
                <span className='decoration-[#F7AB0A]/50 underline'>Contácteme</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>+ 34 604 12 48 41</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>llemos@uoc.edu</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>Las Palmas de Gran Canaria</p>
                </div>
            </div>

            <form action="https://formsubmit.co/llemos@uoc.edu" method="POST"
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
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
  )
}