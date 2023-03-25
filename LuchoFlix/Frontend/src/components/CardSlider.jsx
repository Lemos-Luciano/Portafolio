import React, { useRef, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
// iconos
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CardSlider = ({ data, title }) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [distanciaActual, setDistanciaActual] = useState(0);
  const listRef = useRef();


  //   scroll slider derecha|izquierda
  const handleDirection = (direction) => {
    const boxRectTotal = listRef.current.getBoundingClientRect();
    console.log(`Width = ${boxRectTotal.width}`);
    const boxPantalla = document.getElementById('titulo');
    const boxRectPantalla = boxPantalla.getBoundingClientRect();
    console.log(`Width = ${boxRectPantalla.width}`);

    // distancia total + 100 (50 de cada boton flecha) / la distancia de la pantalla computadora actual  y se le resta 1 => cantidad de veces que tengo que recorrela
    // Multiplicado por pantalla computadora => lo paso a pixeles
    // divido 4 => puedo tocar 4 veces el boton

    const distanciaRecorrerDivididoPX = ((boxRectTotal.width+100) / boxRectPantalla.width - 1) * boxRectPantalla.width / 4;

    // console.log("distancia es " + distancia.width);
    if (direction === "left" && sliderPosition > 0) {
      const distanciax = distanciaActual + distanciaRecorrerDivididoPX;
      setDistanciaActual(distanciaActual + distanciaRecorrerDivididoPX);
      // console.log("la distancia x es" + distanciax);
      listRef.current.style.transform = `translateX(${distanciax}px)`;
      setSliderPosition(sliderPosition - 1);
    };

    if (direction === "right" && sliderPosition < 4) {
      const distanciax = distanciaActual - distanciaRecorrerDivididoPX;
      setDistanciaActual(distanciaActual - distanciaRecorrerDivididoPX);
      listRef.current.style.transform = `translateX(${distanciax}px)`;
      setSliderPosition(sliderPosition + 1);
    };
  };

  return (
    <Container
      className="flex column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div>
        <h1>{title}</h1>
      </div>


      <div className="wrapper" id="titulo">
        {/* si showcontrols es falso le enviamos un none en caso contrario un string vacio */}
        <div
          className={`slider-action left ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>

        <div className="flex slider" ref={listRef}  id="slider">
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>

        <div
          className={`slider-action right ${
            !showControls ? "none" : ""
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  gap: 1rem;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    position: relative;
    .slider {
      margin-left: 50px;
      width: max-content;
      gap: 1rem;
      // La funcion handleDirection modifica los datos con el fin de realizar el scroll
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
    }
    .slider-action {
      background: rgba(128, 128, 128, 0.4);
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      // bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
      &:hover {
        // opacity: 0.4;
        background: rgba(128, 128, 128, 0.8);
        cursor: pointer;
      }
      &:hover svg {
        font-size: 4rem;
        transition: 0.5s all;
      }
    }
    .right {
      right: 0;
      &:hover {
        // opacity: 0.4;
        background: rgba(128, 128, 128, 0.8);
        cursor: pointer;
      }
      &:hover svg {
        font-size: 4rem;
        transition: 0.5s all;
      }
    }
  }
`;

export default CardSlider;
