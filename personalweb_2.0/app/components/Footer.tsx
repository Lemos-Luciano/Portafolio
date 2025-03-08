import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="sticky top-[90vh] max-md:top-[85vh] w-full cursor-pointer flex flex-col items-center justify-center mx-auto z-20">
      {/* Enlace con imagen */}
      <a href="#hero">
        <div className="flex items-center justify-center">
          <img
            src="../../DedoPaArriba.png"
            alt="Imagen Proyecto"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 hover:scale-150 cursor-pointer"
          />
        </div>
      </a>

      {/* Contenedor del iframe */}
      <div className="mt-4"> 
        <iframe
          title="Jerarquias2"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/links/K5dF50sSW3?ctid=3a6d51bf-f1d4-47df-9a61-8bbe9c0e1e66&pbi_source=linkShare"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
