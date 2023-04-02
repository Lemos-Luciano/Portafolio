import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { TMBD_BASE_URL, API_KEY } from "../utils/constants";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

// Comprueba la cantidad de generos que existe en la api (comedia, horror, aventura), asyncthunk hay que pasarle el slice (lucho/genres), luego la reconoceremos segun su id
export const getGenero = createAsyncThunk("lucho/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  // console.log(genres);
  return genres;
});

// Crea el array con la informacion importante de la pelicula
const crearArrayConDatosIniciales = (array, arrayPeliculas, genres) => {
  // console.log(array);
  array.forEach((pelicula) => {
    const generosDePelicula = [];
    // compara el id con el nombre del genero
    pelicula.genre_ids.forEach((genero) => {
      const nombreGenero = genres.find(({ id }) => id === genero);
      if (nombreGenero) generosDePelicula.push(nombreGenero.name);
    });
    // si tiene imagen lo adjunta en los datos importantes
    if (pelicula.backdrop_path) {
      arrayPeliculas.push({
        id: pelicula.id,
        name: pelicula?.original_name
          ? pelicula.original_name
          : pelicula.original_title,
        image: pelicula.backdrop_path,
        genres: generosDePelicula.slice(0, 3),
      });
    }
  });
};

const getDatosIniciales = async (api, genres, paging) => {
  const arrayPeliculas = [];
  for (let i = 1; arrayPeliculas.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    crearArrayConDatosIniciales(results, arrayPeliculas, genres);
  }
  // console.log(arrayPeliculas);
  return arrayPeliculas;
};

// Conecta con la Api para saber la cantidad de peliuclas segun su tipo
export const fetchMovies = createAsyncThunk(
  "lucho/tendencias",
  async ({ type }, thunkApi) => {
    const {
      lucho: { genres },
    } = thunkApi.getState();
    // const data = getDatosIniciales( EN CASO DE QUERER IMPRIMIR LA DATA DEBAJO Descomentar return datos iniciales
    return getDatosIniciales(
      // Obtenemos las tendencias, segun el type (pelicula, serie, persona)
      // https://developers.themoviedb.org/3/trending/get-trending
      `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );
    // console.log(data);
  }
);
// Conecta con la Api para saber la cantidad de peliuclas segun su genero
export const fetchDataByGenre = createAsyncThunk(
  "lucho/moviesByGenre",
  async ({ genre, type }, thunkApi) => {
    const {
      lucho: { genres },
    } = thunkApi.getState();
    // const data = getDatosIniciales( EN CASO DE QUERER IMPRIMIR LA DATA DEBAJO Descomentar return datos iniciales
    return getDatosIniciales(
      // Obtiene las peliculas|series segun su genero ordenados por popularidad
      // https://developers.themoviedb.org/3/discover/movie-discover
      `${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}&sort_by=popularity.desc`,
      genres
    );
    // console.log(data);
  }
);

export const getUserLikedMovies = createAsyncThunk(
  "lucho/getLiked",
  async (email) => {
    const {
      // data: { movies },
      data: { movies },
    } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/liked/${email}`);
    // return movies;
    return movies;
  }
);

export const removeFromLikedMovies = createAsyncThunk(
  "lucho/deleteLiked",
  async ({ email, movieId }) => {
    const {
      data: { movies },
    } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/delete`, {
      email,
      movieId,
    });
    return movies;
  }
);

const LuchoflixSlice = createSlice({
  name: "Lucho",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenero.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getUserLikedMovies.fulfilled, (state, action) => {
      state.moviesliked = action.payload;
    });
    builder.addCase(removeFromLikedMovies.fulfilled, (state, action) => {
      state.moviesliked = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    lucho: LuchoflixSlice.reducer,
  },
});

