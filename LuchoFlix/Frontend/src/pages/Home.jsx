import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// sweet alert
import Swal from "sweetalert2";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenero } from "../store";
// Slider
import Slider from '../components/Slider';
// Medidas Responsive
import { minMedia } from "../utils/constants";
// Control sesion logueada
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";


export default function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
  });


  // Si se realiza scroll se ejecuta, el fondo del nav se coloca en negro
  const [isScrolled, setIsScrolled] = useState(false);

  // llama al reducer del store con nombre lucho
  const genresLoaded = useSelector ((state) => state.lucho.genresLoaded);
  const movies = useSelector ((state) => state.lucho.movies);


  // pruebo si funciona getGenero
  useEffect (() => {
    dispatch(getGenero())
  }, [dispatch]);

  useEffect (() => {
    if(genresLoaded) dispatch(fetchMovies( {type : "all"}));
  }, [dispatch, genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  // sweet alert
  const sweetalert = () => {
    Swal.fire({
        title: "Lo lamentemos",
        text: "Todavia estamos construyendo esta función, gracias por su comprensión",
        icon: "info",
        confirmButtonColor: "#e50914",
        confirmButtonColor: "#e50914",
          customClass: {
            confirmButton: 'alertButton',
          },
          timer: 3000,
          timerProgressBar: true,
    })
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/Player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center"
              onClick={sweetalert}
            >
              <AiOutlineInfoCircle /> Más Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
      @media (max-width:${minMedia}px) {  
        height: 70vh;    
      }
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          height: 100%;
          width: 100%;
          margin-left: 5rem;
          @media (max-width:${minMedia}px) {  
          width: 70vw;
          }
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          // padding: 0.5rem;
          // padding-left: 2rem;
          // padding-right: 2.4rem;
          // Escrito igual pero resumido comienza por arriba y sigue como la aguja del reloj
          padding: 0.5rem 2.4rem 0.5rem 2rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.7;
          }
          // tomamos el segundo elemento de lo que esta anidado (en este caso buttons)
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
          @media (max-width:${minMedia}px) {  
            font-size: 0.8rem;
            }
        }
      }
    }
  }
`;
