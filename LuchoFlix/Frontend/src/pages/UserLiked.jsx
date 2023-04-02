import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLikedMovies } from "../store";
// Control sesion logueada
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
// Componentes
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function UserLiked() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Si se realiza scroll se ejecuta, el fondo del nav se coloca en negro
  const [isScrolled, setIsScrolled] = useState(false);

  // llama al reducer del store con nombre lucho
  // const movies = useSelector((state) => state.lucho.movies);
  const moviesliked = useSelector((state) => state.lucho.moviesliked);
  
  const [email, setEmail] = useState(undefined);

  // Si existe un currentuser (un usuario logueado), toma su email caso contrario ve al login
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });
  }, [navigate]);


  useEffect(() => {
    if (email) {
      console.log("use effect accionado");
      dispatch(getUserLikedMovies(email));
    }
  }, [dispatch, email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>Mi lista</h1>
        {/* {console.log(movies)} */}
        {console.log(moviesliked)}
        {/* {movies===undefined ? ( */}
        {(moviesliked===undefined || moviesliked.length === 0) ? (
          <h2>No tiene peliculas favoritas</h2>
        ) : (
          <>
          <h2>Tiene peliculas favoritas</h2>
          <div className="grid flex">
          {moviesliked.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>;
          })}
        </div>
        </>
        )}
        {/* <div className="grid flex">
          {movies.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} isLiked={true}/>;
          })}
        </div> */}
      </div>
    </Container>
  );
}

const Container = styled.div`
    .content {
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1 {
            margin-left: 3rem;
        }
        .grid {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;
