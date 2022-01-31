import Header from "../components/Header";
import { useRouter } from "next/router";
import BottomNav from "../components/BottomNav";
import { useSelector } from "react-redux";
import WatchListCards from "../components/watchlist_cards/WatchListCards";

const watched = () => {
  const router = useRouter();
  const { watchedMovieList } = useSelector((state) => state.watchlist);
  const check = watchedMovieList.length > 0 ? true : false;

  return (
    <div>
      <Header />
      <div className="mx-12 my-14">
        <div className="flex justify-center  items-center space-x-4 flex-wrap ">
          {check ? (
            watchedMovieList &&
            watchedMovieList.map((e) => {
              return (
                <WatchListCards
                  movies={e}
                  flag="watched"
                  type={e.name === undefined ? "movie" : "tv"}
                ></WatchListCards>
              );
            })
          ) : (
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-white md:text-5xl text-2xl uppercase tracking-wider">
                ADD WACTHED MOVIES
              </h1>
              <div className="mx-auto">
                <button
                  type="button"
                  className="w-52 h-12 hover:bg-green-500 hover:text-white text-xl rounded border-2  hover:border-green-800 bg-green-800 border-white my-7  uppercase"
                  onClick={() => {
                    router.push("/watchList");
                  }}
                >
                  Add Movies
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default watched;
