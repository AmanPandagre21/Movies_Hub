// import Wa from 'react';
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import WatchListCards from "../components/WatchListCards";

const watchList = () => {
  const { movieslist } = useSelector((state) => state.watchlist);
  return (
    <div>
      <Header />
      <div className="mx-12 my-14">
        <div className="flex justify-start items-center space-x-4 flex-wrap ">
          {movieslist &&
            movieslist.map((ele) => {
              return (
                <WatchListCards
                  key={ele.id}
                  movies={ele}
                  flag="watchlist"
                  type={ele.name === undefined ? "movie" : "tv"}
                />
              );
            })}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default watchList;
