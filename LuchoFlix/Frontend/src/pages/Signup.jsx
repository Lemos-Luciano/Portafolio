import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";





export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  // Sube los datos del usuario creado a firebase y responde los distintos errores
  const crearusuario = useCallback ( async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      if (errorCode === "auth/email-already-in-use") {
        alert("El usuario ya se encuentra registrado");
      } else if (errorCode === "auth/weak-password") {
        alert("La contraseña debe tener 6 caracteres como minimo");
      } else if (errorCode === "auth/invalid-email") {
        alert("El usuario colocado no es un correo electrónico");
      } else if (errorCode === "auth/internal-error") {
        alert("Falta colocar la contraseña");
      } else {
        console.log(error);
        alert(error.message);
      }
    }
  }
  , [formValues] ) ;

// Una vez iniciada sesion deriva a la pagina de inicio
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });


  
// key= tecla precionada , keycode= codigo de la tecla
  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;
    // Si Keycode esta entre 0 y 90 y luego cumple los requisitos se ejecuta
    if (keyCode >= 0 && keyCode <= 90) {
      if (showPassword===false && key==="Enter") {
        setShowPassword(true);
      } else if (showPassword===true && key==="Enter") {
        crearusuario(formValues);
      }
    }
  }, [showPassword, formValues, crearusuario]);

  // Registra cada tecla oprimida (keydown), removeEventListener quitamos el listener para que no se sumen cada vez que se ejecute el useEffect, caso contrario se ejecutarian varios keydown al mismo tiempo
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Sinoposis de películas </h1>
            <h4>Miralo cuando quieras, ¡Gratis!</h4>
            <h6>
              ¿Preparado para ver los mejores resumenes? <br /> Escribe tu
              correo electronico y haste miembro
            </h6>
          </div>
          <div className="form formsmall">
            <input
              className="igual"
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
            {/* si showpassword es true entonces muestra el input, en caso contrario muestra el buton Comenzar, haciendo click pasa a ser true */}
            {showPassword && (
              <div>
                <input
                  className="igual"
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
                <div>
                  <button className="igual" onClick={crearusuario}>
                    Crear Usuario
                  </button>
                </div>
              </div>
            )}
            {/* si showpassword es falso, muestra el siguiente contenido */}
            {!showPassword && (
              <button
                className="igual"
                name="comenzar"
                onClick={() => {setShowPassword(true); console.log(showPassword);}}
              >
                Comenzar
              </button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-bottom: 1rem;
  .content {
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
        width: 80%;
        margin-bottom: 2rem;
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        @media (max-width: 1300px) {
          font-size: 1.7rem;
          gap: 0.8rem;
        }
        @media (max-width: 800px) {
          font-size: 1.5rem;
          gap: 0.7rem;
        }
        h1 {
          @media (max-width: 800px) {
            padding: 0 1rem;
          }
        }
      }
      .form {
        display: grid;
        // Si showpassword es true entonces la proporcion es 1 a 1, en caso contrario la proporcion es 2 a 1
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        max-width: 30rem;
        input {
          color: black;
          // border: none;
          padding: 0.7rem;
          font-size: 1rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
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
        font-size: 1.2rem;
      }
      .formsmall {
        // @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // grid-template-columns: none;
        .igual {
          width: 20rem;
          margin-bottom: 0.2rem;
          // }
        }
      }
    }
  }
`;
