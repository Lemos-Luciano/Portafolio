import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import video from "../assets/Video.mp4";
import { useNavigate } from "react-router-dom";

export default function Player() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="player">
        <div className="back">
          {/* navigate -1 es como volver atras */}
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls></video>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
  }
  .back {
    position: absolute;
    padding: 2rem;
    z-index: 1;
    svg {
      font-size: 3rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
        transform: scale(1.2);
      }
    }
  }
  video {
    height: 100%;
    width: 100%;
    // cover El contenido reemplazado se dimensiona para mantener su relación de aspecto mientras llena
    // object-fit: cover;
  }
`;
