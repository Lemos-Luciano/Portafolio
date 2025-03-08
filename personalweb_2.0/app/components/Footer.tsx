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
  <div> 
        <iframe title="Jerarquias2" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0dd75a14-0b20-4ea4-9642-93f00d64d437&autoAuth=true&ctid=3a6d51bf-f1d4-47df-9a61-8bbe9c0e1e66" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  )
}
