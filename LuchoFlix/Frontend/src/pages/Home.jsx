import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenero } from "../store";
// Slider
import Slider from '../components/Slider';


export default function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


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
  // console.log(movies);
  // const [peliculas, setPeliculas] = useState([]);
  // const [busqueda, setBusqueda] = useState();

  // funcion que realiza la petición por get a la api
  // const fetchPeliculas = () => {
  //   axios.get(`${TMBD_BASE_URL}/discover/movie`, {
  //     params: {
  //       api_key: API_KEY,
  //       query: "sort_by=popularity.desc",
  //     },
  //   });
  // };

  // const fechtpeliculas = () => {
  //   axios
  //     .get(
  //       // "https://api.themoviedb.org/3/discover/movie?api_key=0c88a0020acf0787927c7ab02d10a416&sort_by=popularity.desc"
  //       `${TMBD_BASE_URL}/discover/movie`,
  //       {
  //         params: {
  //           api_key: API_KEY,
  //           query: "sort_by=popularity.desc",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.results[0].title);
  //       console.log(res.data.results);
  //       setPeliculas (res.data.results);
  //     });
  // };

  // useEffect ( () => {
  //   fechtpeliculas();
  // },[])

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
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> Más Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
      {/* <div>
        <h1>Películas recomendadas</h1>
        <div className="banner">
          {peliculas.map ( (pelicula, index) => {
            return <div key={index}> 
              <h4>{pelicula.title} </h4>
              <img src={`${IMAGE_PATH + pelicula.poster_path }`} alt="" height={300} width="300" /> 
            </div>;
          })}
        </div>
      </div> */}
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
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
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
        }
      }
    }
  }
`;
