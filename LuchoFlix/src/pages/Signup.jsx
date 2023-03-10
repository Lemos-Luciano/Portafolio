import React, { useState } from 'react'
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {useNavigate } from "react-router-dom";



export default function Signup() {


    const [showPassword, setShowPassword]  = useState(false);
    const [formValues, setFormValues] = useState ({
      email: "",
      password: "",
    });

    // Sube los datos del usuario creado a firebase
    const crearusuario = async () => {
      try {
        const {email, password } = formValues;
        await createUserWithEmailAndPassword (firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };

    // Una vez iniciada sesion deriva a la pagina de inicio
    const navigate = useNavigate();
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate ("/");
    })


  return (
    <Container showPassword = {showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Películas ilimitadas, series y más </h1>
            <h4>Miralo cuando quieras, gratis</h4>
            <h6>Listo para ver los mejores resumenes!?? Escribe tu correo electronico y haste miembro</h6>
          </div>
          <div className="form">
            <input type="email" placeholder='Correo electrónico' name='email' value={formValues.email} onChange={(e) => setFormValues ({ ...formValues, [e.target.name]: e.target.value,})} />
            {/* si showpassword es true entonces muestra el input, en caso contrario muestra el buton Get started, haciendo click pasa a ser true */}
            {showPassword && (
                <input type="password" placeholder='Contraseña' name='password' value={formValues.password} onChange={(e) => setFormValues ({ ...formValues, [e.target.name]: e.target.value,})} />
            )}
            {/* si showpassword es falso, muestra el siguiente contenido */}
            { !showPassword && (
            <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={crearusuario}>Crear Usuario</button>
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
  position: relative; 
  .content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
          gap: 1rem;
          text-align: center;
          font-size: 2rem;
          h1 {
            padding: 0 25rem;
          }
      }
      .form {
        display: grid;
        // Si showpassword es true entonces la proporcion es 1 a 1, en caso contrario la proporcion es 2 a 1
        grid-template-columns: ${( {showPassword}) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
          input {
              color: black;
              // border: none;
              padding: 1.5rem;
              font-size: 1.2rem;
              border: 1px solid black;
              &:focus {outline: none;}
              }
          button {
              padding: 0.5rem 1rem;
              background-color: #e50914;
              border: none;
              cursor: pointer;
              color: white;
              font-weight: bolder;
              font-size: 1.05rem;
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
        }
    }
  }
`;