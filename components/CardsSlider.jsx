import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import ThumbnailTvCard from "./ThumbnailTvCard";

const CardsSlider = ({ movie, title, flag }) => {
  return (
    <>
      <div className="mx-12 my-14">
        <h1 className="uppercase text-green-300 tracking-widest">{title}</h1>
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
