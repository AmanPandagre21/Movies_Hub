import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { useSelector } from "react-redux";
import WatchListCards from "../components/WatchListCards";

const watched = () => {
  const { watchedMovieList } = useSelector((state) => state.watchlist);

  return (
    <div>
      <Header />
      <div className="mx-12 my-14">
        <div className="flex justify-start items-center space-x-4 flex-wrap ">
          {watchedMovieList &&
            watchedMovieList.map((e) => {
              return (
                <WatchListCards
                  movies={e}
                  flag="watched"
                  type={e.name === undefined ? "movie" : "tv"}
                ></WatchListCards>
              );
            })}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default watched;
