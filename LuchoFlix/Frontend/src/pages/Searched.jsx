import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Obetener datos, utilizando el store
import { fetchSearched, getGenero } from "../store";

// Control sesion logueada
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

// Componentes
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Card from "../components/Card";

const Searched = () => {
  // Si existe un currentuser (un usuario logueado), toma su email caso contrario ve al login
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();
  //   onscroll activa navbar
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.lucho.genresLoaded);
  const moviessearched = useSelector((state) => state.lucho.moviessearched);

  // useEffect(() => {
  //   //   dispatch(fetchSearched({ type: "tv" }));
  //   dispatch(fetchSearched());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getGenero());
  }, [dispatch]);

  // useEffect(() => {
  //   if (genresLoaded) dispatch(fetchSearched({ type: "all" }));
  // }, [dispatch, genresLoaded]);

  const buscarpelis = () => {
    dispatch(fetchSearched({ type: "all" }));
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
      else navigate("/login");
    });
  }, [navigate]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex a-center column">
        <h1>Peliculas Buscadas</h1>
        {console.log("movies ssearched es igual a = " + moviessearched)}
        {moviessearched === undefined || moviessearched.length === 0 ? (
          <h4>No se encontraron películas </h4>
        ) : (
          <>
            {/* <Slider movies={moviessearched} /> */}

            <div className="grid flex">
              {moviessearched.map((movie, index) => {
                return (
                  <Card
                    movieData={movie}
                    index={index}
                    key={movie.id}
                    isLiked={true}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Searched;

const Container = styled.div`
.content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    `;
