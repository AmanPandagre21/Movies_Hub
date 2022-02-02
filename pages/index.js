import { useRouter } from "next/router";
// import Link from "next/link";
import Header from "../components/Header";
import CardsSlider from "../components/CardsSlider";
import BottomNav from "../components/BottomNav";
import { indexPageApi } from "./api/apiconfig";

const apis = {
  trendmovie: indexPageApi.trending("movie"),
  ratedmovie: indexPageApi.topRated("movie"),
  trendtv: indexPageApi.trending("tv"),
  ratedtv: indexPageApi.topRated("tv"),
};

const Home = ({ trendingMovies, topRatedMovies, trendingTv, topRatedTv }) => {
  return (
    <>
      <Header />
      <div className="relative ">
        <img
          src="/gallary.jpg"
          className="w-full max-h-screen md:h-96 opacity-20"
        ></img>
        <div className="absolute inset-x-[3%] bottom-1/4 md:inset-x-[26%] md:bottom-1/4">
          <h1 className="uppercase text-4xl md:text-8xl text-green-600 font-bold text-center">
            MOvies <span className="text-white">Hub</span>
          </h1>
          <p className="my-2 px-4 md:px-0 text-sm md:text-lg font-semibold text-white capitalize text-center">
            A place where you can find information about moves and popular web
            series. In movie hub you can create your own Watchlist.
          </p>
        </div>
      </div>

      <CardsSlider
        movie={trendingMovies}
        title="Trending Movies"
        flag="movie"
      />
      <CardsSlider
        movie={topRatedMovies}
        title="TOp RATED Movies"
        flag="movie"
      />
      <CardsSlider movie={trendingTv} title="Trending Tv Shows" flag="tv" />
      <CardsSlider movie={topRatedTv} title="TOp RATED Tv shows" flag="tv" />
      <BottomNav />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const [trendingMoviesRes, topRatedMoviesRes, trendingTvRes, topRatedTvRes] =
      await Promise.all([
        fetch(apis.trendmovie),
        fetch(apis.ratedmovie),
        fetch(apis.trendtv),
        fetch(apis.ratedtv),
      ]);

    const [trendingMovies, topRatedMovies, trendingTv, topRatedTv] =
      await Promise.all([
        trendingMoviesRes.json(),
        topRatedMoviesRes.json(),
        trendingTvRes.json(),
        topRatedTvRes.json(),
      ]);

    return {
      props: {
        trendingMovies: trendingMovies.results,
        topRatedMovies: topRatedMovies.results,
        trendingTv: trendingTv.results,
        topRatedTv: topRatedTv.results,
      },
    };
  } catch (error) {
    return { props: { error: error.message } };
  }
}
