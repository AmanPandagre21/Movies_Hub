const API_KEY = process.env.API_KEY;

// Image path
export const setImage = {
  originalImage: (imgPath) => "https://image.tmdb.org/t/p/original" + imgPath,
  width500Image: (imgPath) => "https://image.tmdb.org/t/p/w500" + imgPath,
  noImage: "https://www.movienewz.com/img/films/poster-holder.jpg",
};

// Youtube links
export const setYTLink = {
  link: (id) => `https://www.youtube.com/watch?v=${id}`,
};

export const base_url = "https://api.themoviedb.org/3/";

export const indexPageApi = {
  trending: (cat) => `${base_url}trending/${cat}/week?api_key=${API_KEY}`,
  topRated: (cat) => `${base_url}${cat}/top_rated?api_key=${API_KEY}`,
};

export const detailsApis = {
  deatils: (id, cat) =>
    `${base_url}${cat}/${id}?api_key=${API_KEY}&language=en-US`,

  credits: (id, cat) =>
    `${base_url}${cat}/${id}/credits?api_key=${API_KEY}&language=en-US`,

  similar: (id, cat) =>
    `${base_url}${cat}/${id}/similar?api_key=${API_KEY}&language=en-US`,

  videos: (id, cat) =>
    `${base_url}${cat}/${id}/videos?api_key=${API_KEY}&language=en-US`,
};

export const movies_and_tv_apis = {
  discover: (cat, page) =>
    `${base_url}discover/${cat}?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
  search: (cat, value, page) =>
    `${base_url}search/${cat}?api_key=${process.env.apiKey}&language=en-US&query=${value}&page=${page}&include_adult=false`,
};
