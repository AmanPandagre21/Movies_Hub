import React from "react";
import ThumbnailCard from "./thumbnail_cards/ThumbnailCard";
import ThumbnailTvCard from "./thumbnail_cards/ThumbnailTvCard";

const CardsSlider = ({ movie, title, flag }) => {
  return (
    <>
      <div className="mx-8 my-14">
        <h1 className="w-3/4 md:w-1/4 border-4 border-green-500 px-4 py-2 rounded-full uppercase my-6 text-xl font-bold">
          {title}
        </h1>

        <div className="flex space-x-6 overflow-x-scroll p-2 -m-2 scrollbar-thin scrollbar-thumb-black scroll">
          {movie &&
            movie.map((ele) => {
              if (flag === "movie") {
                return <ThumbnailCard key={ele.id} result={ele} />;
              } else {
                return <ThumbnailTvCard key={ele.id} result={ele} />;
              }
            })}
        </div>
      </div>
    </>
  );
};

export default CardsSlider;
