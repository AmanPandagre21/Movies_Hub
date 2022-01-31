import React from "react";
import { useRouter } from "next/router";
import ThumbnailCard from "./ThumbnailCard";
import ThumbnailTvCard from "./ThumbnailTvCard";

const CardsGrid = ({ movie, title, flag }) => {
  let flag2 = true;
  const router = useRouter();

  if (movie.length === 0) {
    flag2 = false;
  }

  return (
    <>
      <div className="mx-12 my-14">
        <div className="flex justify-center items-center space-x-4 flex-wrap ">
          {flag2 ? (
            movie.map((ele) => {
              if (flag === "movie") {
                return <ThumbnailCard key={ele.id} result={ele} />;
              } else {
                return <ThumbnailTvCard key={ele.id} result={ele} />;
              }
            })
          ) : (
            <button
              type="button"
              onClick={() => {
                router.reload();
              }}
            >
              BACK
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardsGrid;
