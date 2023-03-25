import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { firebaseAuth } from "../utils/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";



export default function Login() {

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Sube los datos del usuario creado a firebase
  const iniciarsesion = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  // Una vez iniciada sesion deriva a la pagina de inicio
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    })
  }, [navigate] );

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Iniciar sesión</h3>
            </div>
            <div className="container flex column">
              <input
                type="email"
                placeholder='Correo electrónico'
                name='email'
                value={formValues.email}
                onChange={(e) => setFormValues({
                  ...formValues, [e.target.name]: e.target.value,
                })} />

              <input
                type="password"
                placeholder='Contraseña'
                name='password'
                value={formValues.password}
                onChange={(e) => setFormValues({
                  ...formValues, [e.target.name]: e.target.value,
                })} />

              <button onClick={iniciarsesion}>Iniciar sesión</button>
            </div>
          </div>
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
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            widht: 15rem;
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
    }
  }
`;