import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { minMedia } from "../utils/constants";

export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Series", link: "/series" },
    { name: "Películas", link: "/peliculas" },
    { name: "Mi lista", link: "/milista" },
  ];

  const [showsearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  // Cerramos sesión y nos dirige a la pagina de login
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
  }, [navigate]);

  return (
    <Container>
      {/* si isScrolled es true entronces la clase es scrolled en caso contrario estará solo con flex */}
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <Link to="/" className="brand flex a-center j-center">
            <img src={logo} alt="logo" to="/" />
          </Link>
          {/* <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" to="/"/>
          </div> */}
          <ul className="links flex">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showsearch ? "showsearch" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Títulos, géneros"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <button
            onClick={() => {
              signOut(firebaseAuth);
            }}
          >
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    /* sitcky deja fija la barra cuando hago scroll */
    position: sticky;
    top: 0;
    // height: 6.5rem;
    height: 15%;
    width: 100vw;
    // width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 200;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    @media (max-width: ${minMedia}px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .left {
      gap: 2rem;
      @media (max-width: ${minMedia}px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
      .brand {
        img {
          height: 4rem;
          @media (max-width: ${minMedia}px) {
            height: 3rem;
          }
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        @media (max-width: ${minMedia}px) {
          gap: 1rem;
        }
        li {
          a {
            color: white;
            text-decoration: none;
          }
          a:hover {
            color: #f34242;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1rem;
        }
      }
      .search {
        display: flex;
        gap: 0.1rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          svg {
            color: white;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.5s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .showsearch {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;
