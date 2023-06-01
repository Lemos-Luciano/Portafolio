"use client";
import React from 'react';
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2'
import { updateLanguageServiceSourceFile } from 'typescript';
import Boton1 from "../components/Boton1"



type Props = {

}

export default function ContactMe( {} : Props){
      function saludar(){
        return Swal.fire({
            title: 'Muchas gracias',
            text: 'Me pondré en contacto contigo en la brevedad',
            icon: 'success',
            confirmButtonText: 'Entendido',
            timer: 5000,
          })
        
      }
  return (
    <Boton1></Boton1>
  )
}