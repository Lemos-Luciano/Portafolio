"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import LanguageContext from '../context/LanguageContext';

const Boton2 = () => {

    const {language, cambiarIdioma} = useContext(LanguageContext)

  return (
    <Container>
        
<div className="checkbox-wrapper-55">
  <label className="rocker rocker-small">
    <input type="checkbox" onChange={cambiarIdioma} defaultChecked={(language === "es") ? true : false}/>
    <span className="switch-left">
        <img src="../../spain-flag.svg" alt="Descripción de la imagen"  style={{padding:1}}/>
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

  `;

export default Boton2;
