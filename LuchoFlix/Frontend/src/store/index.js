import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { TMBD_BASE_URL, API_KEY } from "../utils/constants";
import axios from "axios";

// sweet alert
import Swal from "sweetalert2";



const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

// Comprueba la cantidad de generos que existe en la api (comedia, horror, aventura), asyncthunk hay que pasarle el slice (lucho/genres), luego la reconoceremos segun su id
export const getGenero = createAsyncThunk("lucho/genres", async () => {
  // generos de series
  const generosSeries = await axios.get(
    `${TMBD_BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=es`
  );
  // generos de pelicula
  const generosPeliculas = await axios.get(
    `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es`
  );

  let genres = generosSeries.data.genres.concat(generosPeliculas.data.genres);

  // Elimina los generos repetidos
  let hash = {};
  genres = genres.filter((o) => (hash[o.id] ? false : (hash[o.id] = true)));

  // console.log(genres);
  return genres;
});

export const getTrailer = createAsyncThunk("lucho/trailer", async (url) => {
  // trailer
  const trailerMovies = await axios.get(
    `${TMBD_BASE_URL}/movie/${url}/videos?api_key=${API_KEY}&language=es`
  );
  // console.log(trailerMovies);
  // https://api.themoviedb.org/3/movie/594767/videos?api_key=0c88a0020acf0787927c7ab02d10a416&language=es
  let trailer = trailerMovies.data.results;
  let index = trailer.findIndex(e => e.name.includes('Tráiler'));
//   if (index !== -1) {
//     console.log(index);
//     console.log(trailer[index].key);
// }
  let urltrailer = trailer[index].key;
  // console.log(trailerMovies);
  return urltrailer;
});



// Crea el array con la informacion importante de cada pelicula
const crearArrayConDatosIniciales = (array, arrayPeliculas, genres) => {
  array.forEach(async (element) => {
    const generosDePelicula = [];
    if (
      // comprueba que el objeto de la pelicula tenga la informacion necesaria
      element.id &&
      element.genre_ids && element.genre_ids.length > 0 &&
      element.backdrop_path &&
      (element.title || element.original_name ) &&
      element.overview &&
      element.video === false
      ) {
        console.log(element.title);
        console.log(element.id);
        // Cambian el id del genero por el nombre del genero en string 
        element.genre_ids.forEach((genero) => {
          const nombreGenero = genres.find(({ id }) => id === genero);
          if (nombreGenero) {
            generosDePelicula.push(nombreGenero.name);
            // console.log(generosDePelicula);
          } else {
            console.log("hubo un error");
          }
        });

        let trailerMovies = await axios.get(
          `${TMBD_BASE_URL}/movie/${element.id}/videos?api_key=${API_KEY}&language=en`
        );
        let trailer = trailerMovies.data.results;
        const conditions = ["Tráiler"];
        // console.log("el trailer es:");
        // console.log(trailer);
        // let encontrado = trailer.findIndex(e => conditions.some(i => e.includes(i)));

        // console.log("encontrado es: ");
        // console.log(encontrado);

        // let index = trailer.findIndex(e => e.name.some(el => 'Tráiler'));
        // conditions.some(el => str1.includes(el));
        let index = trailer.findIndex(e => e.name.includes('Tráiler') || e.name.includes('Trailer') || e.name.includes('trailer') );
        let urltrailer = trailer[index].key;
        // console.log(index);
        // console.log(urltrailer);

        // agrega al array de cada pelicula la informacion necesaria
        arrayPeliculas.push({
          id: element.id,
          name: element.title
            ? element.title
            : element.original_name,
          image: element.backdrop_path,
          genres: generosDePelicula.slice(0, 3),
          overview: element.overview,
          trailer: urltrailer
        });
        console.log(arrayPeliculas);
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
  return arrayPeliculas;
};

// Conecta con la Api para saber la cantidad de peliuclas segun su tipo
export const fetchMovies = createAsyncThunk(
  "lucho/tendencias",
  async ({ type }, thunkApi) => {
    // const urlsinopsis = getTrailer("WhCuNiqUi2w");
    // const urlsinopsis = "WhCuNiqUi2w";
    const {
      lucho: { genres },
    } = thunkApi.getState();
    // const data = getDatosIniciales( EN CASO DE QUERER IMPRIMIR LA DATA DEBAJO Descomentar return datos iniciales
    return getDatosIniciales(
      // Obtenemos las tendencias, segun el type (pelicula, serie, persona)
      // https://developers.themoviedb.org/3/trending/get-trending
      `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}&language=es`,
      genres,
      true,
    );
    // console.log(data);
  }
);

// BUSQUEDAS
export const fetchSearched = createAsyncThunk(
  "lucho/searched",
  async ({ type }, thunkApi) => {
    const {
      lucho: { genres },
    } = thunkApi.getState();
    // const uri = `https://api.themoviedb.org/3/search/multi?api_key=0c88a0020acf0787927c7ab02d10a416&language=es&query=${type}&page=1`;
    const data = getDatosIniciales(
      // Obtenemos la pelicula, series, etc. segun la query que le demos
      `https://api.themoviedb.org/3/search/multi?api_key=0c88a0020acf0787927c7ab02d10a416&language=es&query=${type}`,
      genres,
      true
    );
    // console.log(uri);
    console.log(`https://api.themoviedb.org/3/search/multi?api_key=0c88a0020acf0787927c7ab02d10a416&language=es&query=${type}`);
    return data;
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
      data: { movies },
    } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/liked/${email}`
    );
    return movies;
  }
);


const alertRemoveMovie = () => {
  Swal.fire({
    icon: "success",
    title: "Perfecto!",
    text: "La pelicula ha sido removida con exito",
    confirmButtonColor: "#e50914",
    customClass: {
      confirmButton: 'alertButton',
    },
    timer: 1500,
    timerProgressBar: true,
  })
};

export const removeFromLikedMovies = createAsyncThunk(
  "lucho/deleteLiked",
  async ({ email, movieId }) => {
    const {
      data: { movies },
    } = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/delete`, {
      email,
      movieId,
    });
    // console.log(movies);
    alertRemoveMovie();
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
    builder.addCase(fetchSearched.fulfilled, (state, action) => {
      state.moviessearched = action.payload;
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
