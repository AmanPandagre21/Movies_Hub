import MovieCards from "./MovieCards";
import TVCards from "./TVCards";

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
