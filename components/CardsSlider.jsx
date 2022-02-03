import React from "react";
import ThumbnailCard from "./thumbnail_cards/ThumbnailCard";
import ThumbnailTvCard from "./thumbnail_cards/ThumbnailTvCard";
import Link from "next/link";

const CardsSlider = ({ movie, title, flag }) => {
  return (
    <>
      <div className="mx-8 my-14">
        <div className="md:flex md:justify-between">
          <div className="w-auto md:w-72 border-4 border-green-500 px-4 py-2 rounded-full uppercase my-6 text-xl font-bold text-center">
            <h1 className="">{title}</h1>
          </div>
          <div className="w-32 md:w-32 border-4 border-green-500 px-1 py-2 rounded-full uppercase my-6 text-lg font-bold text-center ">
            <Link
              href={flag === "movie" ? "/movies" : "/tv"}
              className="cursor-pointer"
            >
              see more
            </Link>
          </div>
        </div>
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
