import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="sticky top-[90vh] max-md:top-[85vh] w-full cursor-pointer flex items-center justify-center mx-auto z-20 ">
        <a href="#hero" >
        <div className="flex items-center justify-center">
            <img src="../../DedoPaArriba.png"
            alt="Imagen Proyecto"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 hover:scale-150 cursor-pointer" />
        </div>
    </a>
  </div>
  )
}