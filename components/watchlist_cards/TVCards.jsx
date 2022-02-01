import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setImage } from "../../pages/api/apiconfig";
import { EyeIcon, EyeOffIcon, XCircleIcon } from "@heroicons/react/solid";
import {
  addWatchedList,
  removeMovieFromWatchList,
  moveMovie,
  removeMovieFromWatchedMovies,
} from "../../redux/watchlistSlice";

const TVCards = ({ flag, movies }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      <div className="my-3">
        {flag === "watchlist" ? (
          <div className="max-w-xs bg-[#06202A] rounded-lg border border-none shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div className="relative">
              <a onClick={() => router.push(`/tvShows/${movies.id}`)}>
                <Image
                  className="rounded-lg w-10/12 cursor-pointer"
                  src={
                    movies.poster_path !== ""
                      ? setImage.width500Image(movies.poster_path)
                      : setImage.noImage
                  }
                  alt=""
                  width={230}
                  height={350}
                />
              </a>
              <div className=" absolute top-0 right-0 flex  bg-transparent my-2">
                <EyeIcon
                  className="w-7 bg-white rounded-full text-purple-700 mx-1 cursor-pointer"
                  onClick={() => dispatch(addWatchedList(movies))}
                />
                <XCircleIcon
                  className="w-7 text-red-700 bg-white rounded-full mx-1 cursor-pointer"
                  onClick={() => dispatch(removeMovieFromWatchList(movies.id))}
                />
              </div>
            </div>

            <div className="px-3 flex justify-between items-center">
              <a
                href="#"
                className="inline-flex items-center w-36 px-3 text-sm  truncate  text-center text-white capitalize tracking-normal font-bold"
              >
                {movies.name}
              </a>

              <p className="text-white font-bold text-xs py-1 px-2 ml-5  bg-green-700 rounded-full hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {movies.vote_average}
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-xs bg-[#06202A] rounded-lg border border-none shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div className="relative">
              <a onClick={() => router.push(`/tvShows/${movies.id}`)}>
                <Image
                  className="rounded-lg w-10/12 cursor-pointer"
                  src={
                    movies.poster_path !== ""
                      ? setImage.width500Image(movies.poster_path)
                      : setImage.noImage
                  }
                  alt=""
                  width={230}
                  height={350}
                />
              </a>
              <div className=" absolute top-0 right-0 flex  bg-transparent my-2">
                <EyeOffIcon
                  className="w-7 bg-white rounded-full text-purple-700 mx-1 cursor-pointer"
                  onClick={() => dispatch(moveMovie(movies))}
                />
                <XCircleIcon
                  className="w-7 text-red-700 bg-white rounded-full mx-1 cursor-pointer"
                  onClick={() =>
                    dispatch(removeMovieFromWatchedMovies(movies.id))
                  }
                />
              </div>
            </div>

            <div className="px-3 flex justify-between items-center">
              <a
                href="#"
                className="inline-flex items-center w-36 px-3 text-sm  truncate  text-center text-white capitalize tracking-normal font-bold"
              >
                {movies.original_title}
              </a>

              <p className="text-white font-bold text-xs py-1 px-2 ml-5  bg-green-700 rounded-full hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {movies.vote_average}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TVCards;
