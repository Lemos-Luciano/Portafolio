import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="sticky top-[90vh] w-full cursor-pointer flex items-center justify-center mx-auto z-20 ">
        <a href="#hero" >
        {/* <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"> */}
        <div className="flex items-center justify-center">
            <img src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/DedoPaArriba.png?raw=true`} 
            alt={`Imagen Proyecto`}
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 hover:scale-150 cursor-pointer" />
        </div>
    </a>
  </div>
  )
}