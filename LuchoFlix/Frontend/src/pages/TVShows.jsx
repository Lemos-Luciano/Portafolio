import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenero } from "../store";
import { minMedia } from "../utils/constants";

// Control sesion logueada
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
// Componentes
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";



export default function TVshows() {
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
  const genresLoaded = useSelector((state) => state.lucho.genresLoaded);
  const movies = useSelector((state) => state.lucho.movies);
  const genres = useSelector((state) => state.lucho.genres);

  // pruebo si funciona getGenero
  useEffect(() => {
    dispatch(getGenero());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
  }, [dispatch, genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  // const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // useEffect(()=> {
  //   console.log(scrollLeft);
  // })

  // const posicionhorizontal = () => {
  // console.log("Horizontal: " + window.scrollX);
  // };

  return <Container>
    <div className="navbar">
      <Navbar isScrolled={isScrolled} />
    </div>
    <div className="data">
    <SelectGenre genres={genres} type="tv" />
      {
        movies.length ? <Slider movies={movies} /> : <NotAvailable />
      }
    </div>
  </Container>;
}


const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
    @media (max-width: ${minMedia}px) {
      margin-top: 11rem;
    }
  }
`;
