import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGE_PATH_500 } from "../utils/constants";
import video from "../assets/Video.mp4";
import axios from "axios";

// Medidas Responsive
// import { minMedia } from "../utils/constants";


// Control logueo
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

// Iconos de control del slider
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeFromLikedMovies } from "../store";

function Card({ movieData, isLiked = false }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const dispatch = useDispatch();

  // Si existe un currentuser (un usuario logueado), toma su email caso contrario ve al login
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
      else navigate("/login");
    });
  }, [navigate]);

  const addToList = async () => {
    try {
      // console.log(`${process.env.REACT_APP_BACKEND_URL}`);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/add`, {
        email,
        data: movieData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isHovered);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="imagen-slider">
        <img src={`${IMAGE_PATH_500}${movieData.image}`} alt="movie" />
      </div>

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`${IMAGE_PATH_500}${movieData.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
            />
            <video
              src={video}
              autoPlay
              loop
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3
              className="name"
              onClick={() => {
                navigate("/player");
              }}
            >
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dislike" />
                {isLiked ? (
                  <BsCheck
                    title="Remove From List"
                    onClick={() =>
                      dispatch(
                        removeFromLikedMovies({ movieId: movieData.id, email })
                      )
                    }
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={addToList} />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {movieData.genres.map((genre) => (
                  <li key={genre}> {genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  // max-width: 230px;
  // height: 100%;
  // width: auto;
  // height: 100px;
  cursor: pointer;
  position: relative;
  .imagen-slider{
    object-fit: cover;
    height: 100%;
    width: auto;
  }
  img {
    border-radius: 0.2rem;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    // position: relative;
    /* Sube el resumen del cuadro */
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
  }
  .image-video-container {
    position: relative;
    height: 140px;
    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 4;
      position: absolute;
    }
    video {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      //   El video se reproducirá encima de la foto
      z-index: 5;
      position: absolute;
    }
  }
  .icons {
    .controls {
      display: flex;
      gap: 1rem;
    }
    svg {
      font-size: 2rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #b8b8b8;
      }
    }
  }
  .genres {
    ul {
      gap: 1rem;
      li {
        padding-right: 0.7rem;
        &:first-of-type {
          list-style-type: none;
        }
      }
    }
  }
`;

export default Card;
