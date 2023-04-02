import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Una vez iniciada sesion deriva a la pagina de inicio
  const navigate = useNavigate();
  const [olvidoPass, setOlvidoPass] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  }, [navigate]);

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
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        alert("La contraseña introducida es incorrecta");
      } else if (errorCode === "auth/user-not-found") {
        alert("El usuario colocado es incorrecto");
      } else if (errorCode === "auth/invalid-email") {
        alert("El usuario colocado no es un correo electrónico");
      } else {
        alert(error);
        console.log(errorCode);
      }
    }
  };

  const recuperarpassword = async () => {
    try {
      const { email } = formValues;
      await sendPasswordResetEmail(firebaseAuth, email);
      alert(
        "En unos minutos recibirás un correo electrónico con las instrucciones para cambiar tu contraseña"
      );
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        alert("La contraseña introducida es incorrecta");
      } else if (errorCode === "auth/user-not-found") {
        alert("El usuario colocado es incorrecto");
      } else if (errorCode === "auth/invalid-email") {
        alert("El usuario colocado no es un correo electrónico");
      } else {
        alert(error);
        console.log(errorCode);
      }
    }
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
            {olvidoPass ? 
              <h3>Iniciar sesión</h3>
              :
              <h3>Cambio contraseña</h3>
            }
            </div>
            <div className="container flex column a-center">
              <input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              {olvidoPass ? (
                <>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={formValues.password}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <button onClick={iniciarsesion}>Iniciar sesión</button>
                </>
              ) : (
                <button onClick={recuperarpassword}>
                  Recuperar contraseña
                </button>
              )}

              <h5 onClick={() => 
                  setOlvidoPass(!olvidoPass)}>
                ¿Olvidaste tu contraseña?
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div/*css*/ `
  position: relative;
  .content {
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
        width: 20rem;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            // width: 15rem;
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
          h5 {
            &:hover{
              color: red;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
