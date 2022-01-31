import { useState, useEffect } from "react";
import CastandCrew from "./CastandCrew";
import { setImage, setYTLink } from "../pages/api/apiconfig";

const TVDetails = ({ details, cast, trailer }) => {
  const [trail, setTrailer] = useState([]);

  // useEffect(() => {
  //   setTrailer((prev) => {
  //     return trailer.filter((fil) => fil.type === "Trailer");
  //   });
  // }, [setTrailer]);

  return (
    <>
      {(details && cast && trailer && (
        <div className="absolute inset-y-[5%] inset-x-[5%]">
          <div className="grid grid-cols-3 gap-4">
            {/* Poster image */}
            <div className="w-[90%] h-[90%]  bg-transparent rounded-lg m-auto">
              <img
                src={setImage.width500Image(details.poster_path)}
                className="w-[100%] h-[80%] rounded"
              ></img>
              <div className="bg-green-900 hover:ring-white hover:bg-green-600 flex justify-center items-center">
                <a
                  href={setYTLink.link(trail[0])}
                  target="_blank"
                  className="text-lg uppercase font-semibold py-2"
                >
                  Watch Trailer
                </a>
              </div>
            </div>
            {/* Movie Details */}
            <div className="col-span-2 ml-5">
              {/* name */}
              <h1 className="text-5xl text-white uppercase leading-3 mt-12">
                {details.name}
              </h1>

              {/* description */}
              <p className="text-sm text-gray-400 mt-8">{details.overview}</p>
              {/* genres */}
              <div className="flex justify-space-evenly space-x-6 m-4 flex-wrap">
                {details.genres.map((ele) => {
                  return (
                    <p
                      className="bg-transparent px-4 py-1.5 rounded-2xl w-auto h-auto text-sm ring-2 ring-green-800 hover:ring-green-400 text-white"
                      key={ele.id}
                    >
                      {ele.name}
                    </p>
                  );
                })}
              </div>
              {/* collection details */}
              <div className="grid  grid-cols-3">
                <div className="mx-2">
                  <h1>
                    Status :- <span>{details.status}</span>
                  </h1>
                </div>
                <div className="mx-2">
                  <h1>
                    Episode run time :-
                    <span>
                      {details.episode_run_time !== []
                        ? details.episode_run_time.join("-")
                        : "null"}
                      min
                    </span>
                  </h1>
                </div>
                <div className="mx-2">
                  <h1>
                    First air Date :-
                    <span>
                      {details.first_air_date !== ""
                        ? details.first_air_date
                        : "null"}
                    </span>
                  </h1>
                </div>

                {details.created_by.map((e) => {
                  return (
                    <div className="mx-2">
                      <CastandCrew key={e.id} cast={e} />
                    </div>
                  );
                })}
              </div>

              {/* trailer section */}

              {/* cast */}
              <h1>CAST AND CREW</h1>
              <div className="flex flex-row space-x-6 overflow-x-scroll p-2 scrollbar-thin scrollbar-thumb-green-800 scroll">
                {cast.map((c) => {
                  return <CastandCrew key={c.id} cast={c} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )) ||
        "NO DATA FOUND"}
    </>
  );
};

export default TVDetails;
