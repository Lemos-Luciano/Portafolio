import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";
import Searched from "./pages/Searched";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/peliculas" element={<Movies />} />
        <Route exact path="/milista" element={<UserLiked />} />
        <Route exact path="/series" element={<TVShows />} />
        <Route exact path="/Player" element={<Player />} />
        <Route exact path="/busqueda" element={<Searched />} />
      </Routes>
    </BrowserRouter>
  )
}
