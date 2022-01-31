import MovieCards from "./watchlist_cards/MovieCards";
import TVCards from "./watchlist_cards/TVCards";

const WatchListCards = ({ movies, flag, type }) => {
  return (
    <>
      {type === "movie" ? (
        <MovieCards flag={flag} movies={movies} />
      ) : (
        <TVCards flag={flag} movies={movies} />
      )}
    </>
  );
};

export default WatchListCards;
