import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import millify from "millify";
import CastandCrew from "./CastandCrew";
import { setImage, setYTLink } from "../../pages/api/apiconfig";
import { PlayIcon } from "@heroicons/react/solid";

const MoviesDetails = ({ details, cast, trailer }) => {
  const router = useRouter();
  const [trail, setTrailer] = useState([]);
  const [yt, setYT] = useState({});

  // useEffect(() => {
  //   setTrailer((prev) => {
  //     return trailer.filter((fil) => fil.type === "Trailer");
  //   });

  //   setYT(trail.slice(0, 1)[0]);
  // }, [setTrailer, setYT]);

  return (
    <>
      {(details && cast && trailer && (
        <>
          <div className="md:absolute md:inset-y-[5%] md:inset-x-[5%]">
            <div className="grid grid-cols-3 gap-4">
              {/* Poster image */}
              <div className="hidden md:block  w-[90%] h-[90%] bg-transparent rounded-lg m-auto">
                <img
                  src={setImage.width500Image(details.poster_path)}
                  className="w-full h-[90%] rounded"
                ></img>
                <div className="bg-green-900 hover:ring-white hover:bg-green-600 flex justify-center items-center">
                  <a
                    href={setYTLink.link(yt)}
                    target="_blank"
                    className="text-lg uppercase font-semibold py-2"
                  >
                    Watch Trailer
                  </a>
                </div>
              </div>

              {/* Movie Details */}
              <div className="col-span-3 px-7 md:mt-5 bg-black md:bg-transparent md:col-span-2  ">
                {/* name */}
                <h1 className="text-4xl text-white uppercase leading-tight mt-4 md:mb-0 md:mt-12">
                  {details.title}
                </h1>
                <h2 className="my-5 font-bold italic text-xl text-yellow-400">
                  {details.tagline}...
                </h2>
                {/* phone section trailer*/}
                <div className="md:hidden flex justify-center items-center my-8 text-xl">
                  <PlayIcon className="w-8 mx-2" />
                  <button className="cursor-pointer"> PLay Trailer</button>
                </div>
                {/* description */}
                <div className="mt-3 md:mt-2">
                  <h1 className="mb-3 text-xl text-green-500 capitalize font-bold">
                    Overview
                  </h1>
                  <p className="text-sm text-gray-400">{details.overview}</p>
                </div>

                {/* genres */}
                <div className="flex justify-space-evenly space-x-3 my-4 md:space-x-6 md:m-4 flex-wrap">
                  {details.genres.map((ele) => {
                    return (
                      <p
                        className="bg-transparent my-2 px-4 py-1.5 rounded-2xl w-auto h-auto text-sm ring-2 ring-green-800 hover:ring-green-400 text-white"
                        key={ele.id}
                      >
                        {ele.name}
                      </p>
                    );
                  })}
                </div>
                {/* collection details */}
                <div className="bg-white rounded p-2 my-5 md:my-0 md:p-0 text-black  md:text-white md:bg-transparent grid grid-cols-2 md:grid-cols-2">
                  <div className="mx-3 md:mx-2 md:my-2">
                    <h1 className="uppercase font-semibold text-md">
                      Status =
                      <span className="text-green-800 md:text-green-500 font-bold">
                        {details.status}
                      </span>
                    </h1>
                  </div>

                  <div className="mx-3 md:mx-2 md:my-2">
                    <h1 className="uppercase font-semibold text-md">
                      Budget =
                      <span className="text-green-800 md:text-green-500 font-bold">
                        $
                        {details.budget !== ""
                          ? millify(details.budget)
                          : "null"}
                      </span>
                    </h1>
                  </div>

                  <div className=" mx-3 md:mx-2 md:my-2">
                    <h1 className="uppercase font-semibold text-md">
                      Release Date =
                      <span className="text-green-800 md:text-green-500 font-bold">
                        {details.release_date !== ""
                          ? details.release_date
                          : "null"}
                      </span>
                    </h1>
                  </div>

                  <div className=" mx-3 md:mx-2 md:my-2">
                    <h1 className="uppercase font-semibold text-md">
                      Revenue =
                      <span className="text-green-800 md:text-green-500 font-bold">
                        $
                        {details.revenue !== ""
                          ? millify(details.revenue)
                          : "null"}
                      </span>
                    </h1>
                  </div>

                  <div className=" mx-3 md:mx-2 md:my-2">
                    <h1 className="uppercase font-semibold text-md">
                      runtime =
                      <span className="text-green-800 md:text-green-500 font-bold">
                        {details.runtime !== "" ? details.runtime : "null"} min
                      </span>
                    </h1>
                  </div>
                </div>
                {/* trailer section */}
              </div>
            </div>
          </div>

          {/* cast */}
          <div className="mx-5 md:mx-16 md:my-20">
            <h1 className="bg-white w-60 px-4 py-2 border-4 border-green-500  rounded-full my-6 text-xl uppercase text-green-600 font-bold">
              CAST AND CREW
            </h1>
            <div className="flex space-x-6 overflow-x-scroll p-2 -m-2 scrollbar-thin scrollbar-thumb-black scroll">
              {cast.map((c) => {
                return <CastandCrew key={c.id} cast={c} />;
              })}
            </div>
          </div>
        </>
      )) || (
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-white md:text-5xl text-2xl uppercase tracking-wider">
            Result not found
          </h1>
          <div className="mx-auto">
            <button
              type="button"
              className="w-52 h-12 hover:bg-green-500 hover:text-white text-xl rounded border-2  hover:border-green-800 bg-green-800 border-white my-7  uppercase"
              onClick={() => {
                router.push("/movies");
              }}
            >
              Back to movies
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
