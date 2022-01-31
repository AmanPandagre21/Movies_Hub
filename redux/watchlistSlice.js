import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieslist:
    typeof window !== "undefined"
      ? localStorage.getItem("watchLists")
        ? JSON.parse(localStorage.getItem("watchLists"))
        : []
      : [],
  watchedMovieList:
    typeof window !== "undefined"
      ? localStorage.getItem("watchedMovies")
        ? JSON.parse(localStorage.getItem("watchedMovies"))
        : []
      : [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    //   add movie to WatchList
    addMovie: (state, { payload }) => {
      state.movieslist = [payload, ...state.movieslist];
      localStorage.setItem("watchLists", JSON.stringify(state.movieslist));
    },

    // remove movie from watchList
    removeMovieFromWatchList: (state, { payload }) => {
      state.movieslist = state.movieslist.filter((ele) => ele.id !== payload);

      localStorage.setItem("watchLists", JSON.stringify(state.movieslist));
    },

    // add movie into watched movies
    addWatchedList: (state, { payload }) => {
      state.movieslist = state.movieslist.filter(
        (ele) => ele.id !== payload.id
      );
      state.watchedMovieList = [payload, ...state.watchedMovieList];

      localStorage.setItem("watchLists", JSON.stringify(state.movieslist));
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(state.watchedMovieList)
      );
    },

    // move movies form watchedMovies to movie List
    moveMovie: (state, { payload }) => {
      state.watchedMovieList = state.watchedMovieList.filter(
        (ele) => ele.id !== payload.id
      );
      state.movieslist = [payload, ...state.movieslist];

      localStorage.setItem("watchLists", JSON.stringify(state.movieslist));
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(state.watchedMovieList)
      );
    },

    // remove movie from Watched Movies
    removeMovieFromWatchedMovies: (state, { payload }) => {
      state.watchedMovieList = state.watchedMovieList.filter(
        (ele) => ele.id !== payload
      );

      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(state.watchedMovieList)
      );
    },
  },
});

export const {
  addMovie,
  removeMovieFromWatchList,
  moveMovie,
  removeMovieFromWatchedMovies,
  addWatchedList,
} = watchlistSlice.actions;
export default watchlistSlice.reducer;
