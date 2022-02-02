import React from "react";
import { useRouter } from "next/router";
import ThumbnailCard from "./thumbnail_cards/ThumbnailCard";
import ThumbnailTvCard from "./thumbnail_cards/ThumbnailTvCard";

const CardsGrid = ({ movie, title, flag }) => {
  let flag2 = true;
  const router = useRouter();

  if (movie.length === 0) {
    flag2 = false;
  }

  return (
    <>
      <div className="mx-12 my-8 md:my-14">
        <div className="flex justify-center items-center space-x-4 flex-wrap ">
          {flag2 ? (
            movie &&
            movie.map((ele) => {
              if (flag === "movie") {
                return <ThumbnailCard key={ele.id} result={ele} />;
              } else {
                return <ThumbnailTvCard key={ele.id} result={ele} />;
              }
            })
          ) : (
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-white md:text-5xl text-2xl uppercase tracking-wider">
                Result not found
              </h1>
              <div className="mx-auto">
                <button
                  type="button"
                  className="w-52 h-12 hover:bg-green-500 hover:text-white text-xl rounded border-2  hover:border-green-800 bg-green-800 border-white my-7  uppercase"
                  onClick={() => {
                    router.reload();
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardsGrid;
