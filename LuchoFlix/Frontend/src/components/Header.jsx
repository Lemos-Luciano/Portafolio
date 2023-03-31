import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { minMedia } from "../utils/constants";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Iniciar sesión" : "Crear cuenta"}
      </button>
    </Container>
  );
}

const Container = styled.div`
    margin-top: 2rem;
    padding: 0 4rem;
    // @media (max-width:800px)  {  
    @media (max-width:${minMedia}px) {      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .logo {
        img {height: 5rem;}
        // @media (max-width:800px) {
          @media (max-width:${minMedia}px) {      
          img {height: 4rem;}
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      @media (max-width:800px) {
        font-size: 0.95rem;
      }
`;
