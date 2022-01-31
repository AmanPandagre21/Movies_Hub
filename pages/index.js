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
