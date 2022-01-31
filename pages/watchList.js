import { useRouter } from "next/router";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import WatchListCards from "../components/watchlist_cards/WatchListCards";

const watchList = () => {
  const router = useRouter();
  const { movieslist } = useSelector((state) => state.watchlist);
  const check = movieslist.length > 0 ? true : false;

  return (
    <>
      <Header />
      <div className="mx-12 my-14">
        <div className="flex justify-center items-center space-x-4 flex-wrap">
          {check ? (
            movieslist &&
            movieslist.map((ele) => {
              return (
                <WatchListCards
                  key={ele.id}
                  movies={ele}
                  flag="watchlist"
                  type={ele.name === undefined ? "movie" : "tv"}
                />
              );
            })
          ) : (
            <div className="flex flex-col justify-center items-center">
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
    </>
  );
};

export default watchList;
