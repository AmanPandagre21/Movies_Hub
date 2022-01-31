import { configureStore, combineReducers } from "@reduxjs/toolkit";
import watchListReducer from "./watchlistSlice";

// const reducer = combineReducers({

// });

export const store = configureStore({
  reducer: {
    watchlist: watchListReducer,
  },
});
