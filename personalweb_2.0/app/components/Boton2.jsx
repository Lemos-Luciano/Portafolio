"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import SpainFlag from "../../public/spain-flag.svg"
import LanguageContext from '../context/LanguageContext';

const Boton2 = () => {

    const {language, cambiarIdioma} = useContext(LanguageContext)

  return (
    <Container>
        
<div className="checkbox-wrapper-55">
  <label className="rocker rocker-small">
    <input type="checkbox" onChange={cambiarIdioma} defaultChecked={(language === "es") ? true : false}/>
    <span className="switch-left">
        {/* Esp */}
        {/* <img src={SpainFlag} alt="" /> */}
        <img src="../../spain-flag.svg" alt="Descripción de la imagen"  style={{padding:1}}/>
        {/* <img src="../../BevelledArgentina.svg" alt="Descripción de la imagen" width={30} style={{marginTop:1}}/> */}
    </span>
    <span className="switch-right">
        <img src="../../united-kingdom-flag-uk.svg" alt="Descripción de la imagen" style={{padding:1}}/>
    </span>
  </label>
</div>

    </Container>
  );
};

const Container = styled.div`

// .checkbox-wrapper-55 input[type="checkbox"] {
//     visibility: hidden;
//     display: none;
//   }

//   .checkbox-wrapper-55 *,
//   .checkbox-wrapper-55 ::after,
//   .checkbox-wrapper-55 ::before {
//     box-sizing: border-box;
//   }

//   .checkbox-wrapper-55 .rocker {
//     display: inline-block;
//     position: relative;
//     /*
//     SIZE OF SWITCH
//     ==============
//     All sizes are in em - therefore
//     changing the font-size here
//     will change the size of the switch.
//     See .rocker-small below as example.
//     */
//     font-size: 2em;
//     font-weight: bold;
//     text-align: center;
//     text-transform: uppercase;
//     color: #888;
//     width: 7em;
//     height: 4em;
//     overflow: hidden;
//     border-bottom: 0.5em solid #eee;
//   }

//   .checkbox-wrapper-55 .rocker-small {
//     font-size: 0.75em;
//   }

//   .checkbox-wrapper-55 .rocker::before {
//     content: "";
//     position: absolute;
//     top: 0.5em;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #999;
//     border: 0.5em solid #eee;
//     border-bottom: 0;
//   }

//   .checkbox-wrapper-55 .switch-left,
//   .checkbox-wrapper-55 .switch-right {
//     cursor: pointer;
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 2.5em;
//     width: 3em;
//     transition: 0.2s;
//     user-select: none;
//   }

//   .checkbox-wrapper-55 .switch-left {
//     height: 2.4em;
//     width: 2.75em;
//     left: 0.85em;
//     bottom: 0.4em;
//     background-color: #ddd;
//     transform: rotate(15deg) skewX(15deg);
//   }

//   .checkbox-wrapper-55 .switch-right {
//     right: 0.5em;
//     bottom: 0;
//     background-color: #0084d0;
//     color: #fff;
//   }

//   .checkbox-wrapper-55 .switch-left::before,
//   .checkbox-wrapper-55 .switch-right::before {
//     content: "";
//     position: absolute;
//     width: 0.4em;
//     height: 2.45em;
//     bottom: -0.45em;
//     background-color: #ccc;
//     transform: skewY(-65deg);
//   }

//   .checkbox-wrapper-55 .switch-left::before {
//     left: -0.4em;
//   }

//   .checkbox-wrapper-55 .switch-right::before {
//     right: -0.375em;
//     background-color: transparent;
//     transform: skewY(65deg);
//   }

//   .checkbox-wrapper-55 input:checked + .switch-left {
//     background-color: #0084d0;
//     color: #fff;
//     bottom: 0px;
//     left: 0.5em;
//     height: 2.5em;
//     width: 3em;
//     transform: rotate(0deg) skewX(0deg);
//   }

//   .checkbox-wrapper-55 input:checked + .switch-left::before {
//     background-color: transparent;
//     width: 3.0833em;
//   }

//   .checkbox-wrapper-55 input:checked + .switch-left + .switch-right {
//     background-color: #ddd;
//     color: #888;
//     bottom: 0.4em;
//     right: 0.8em;
//     height: 2.4em;
//     width: 2.75em;
//     transform: rotate(-15deg) skewX(-15deg);
//   }

//   .checkbox-wrapper-55 input:checked + .switch-left + .switch-right::before {
//     background-color: #ccc;
//   }

//   /* Keyboard Users */
//   .checkbox-wrapper-55 input:focus + .switch-left {
//     color: #333;
//   }

//   .checkbox-wrapper-55 input:checked:focus + .switch-left {
//     color: #fff;
//   }

//   .checkbox-wrapper-55 input:focus + .switch-left + .switch-right {
//     color: #fff;
//   }

//   .checkbox-wrapper-55 input:checked:focus + .switch-left + .switch-right {
//     color: #333;
//   }
  `;

export default Boton2;