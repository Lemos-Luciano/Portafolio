"use client"
import React, { useContext } from 'react';
import styled from "styled-components";
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2'
import LanguageContext from '../context/LanguageContext';


const Boton1 = () => {

  const {texts, language} = useContext(LanguageContext)

  function saludar(){
    const titleUpdated = (language === "es") ? "Muchas gracias" : "Thank you very much";
    const textUpdated = (language === "es") ? "Me pondré en contacto contigo lo antes posible" : "I will contact you as soon as possible";
    const confirmbuttonUpdated = (language === "es") ? "Entendido" : "Done";
    return Swal.fire({
        title: titleUpdated,
        text: textUpdated,
        icon: 'success',
        confirmButtonText: confirmbuttonUpdated,
        timer: 5000,
      })
    
  }

  return (
    <Container>

 <div className='h-screen flex relative flex-row  max-md:flex-col justify-center items-center'>
        <h3 className='titulos'>
            {texts.hero_contact}
        </h3>
      <div className="button-85 flex justify-center items-center space-x-12 max-md:space-x-0 m-5 max-lg:flex-col max-lg:space-y-5">
    {/* <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center'> */}

        {/* Datos personales */}        
            {/* <div className='flex flex-col space-y-7 px-2 max-w-lg' > */}
            <div className='flex flex-col space-y-7 px-2 max-md:mb-7'>
                <div>
                    <h4 className='text-xl font-semibold text-center '>
                        {texts.contact_slogan} <br />
                        <span className='decoration-[#F7AB0A]/50 underline'> {texts.contact_slogan2}</span>
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
                        <input type="text" placeholder={(language === "es") ? "Nombre" : "Name"} name="nombre" className="contactInput"  />
                        <input type="email" placeholder={(language === "es") ? "Correo electrónico" : "Email"}  name="email" className="contactInput"  />
                    </div>
                    <input type="text" placeholder={(language === "es") ? "Motivo" : "Subject"} name="Motivo"  className="contactInput"  />
                    <textarea name="mensaje" placeholder={(language === "es") ? "Mensaje" : "Message"}  className="contactInput" ></textarea>
                    <button
                        type="submit"
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'
                        onClick={() => {saludar()}}
                        >
                           {(language === "es") ? "Enviar" : "Submit"}
                    </button>
                    {/* <!-- Luego de submit, nos dirige a la pagina deseada --> */}
                    <input type="hidden" name="_next" value="https://lucianolemos.vercel.app/"/>
                    {/* <!-- Quita el captcha de formsumit -->   */}
                    <input type="hidden" name="_captcha" value="false"/>
                </form>
            </div>
        </div>
    </div>
    </Container>
  )
}


const Container = styled.div`
.button-85 {
    padding: 2rem;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-85:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  
  .button-85:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

export default Boton1