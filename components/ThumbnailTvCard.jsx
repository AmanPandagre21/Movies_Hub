import Image from "next/image";
import { useRouter } from "next/router";
import { setImage } from "../pages/api/apiconfig";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, CheckIcon } from "@heroicons/react/solid";
import { addMovie } from "../redux/watchlistSlice";

const ThumbnailTvCard = ({ result }) => {
  const dispatch = useDispatch();
  const { movieslist, watchedMovieList } = useSelector(
    (state) => state.watchlist
  );
  const router = useRouter();

  const savedMovie = movieslist.find((e) => e.id === result.id);
  const savedWatchedMovie = watchedMovieList.find((e) => e.id === result.id);

  const listDisabled = savedMovie ? true : savedWatchedMovie ? true : false;
  const watchedDiasbled = savedWatchedMovie ? true : false;
  return (
    <>
      <div className="my-4">
        <div className="max-w-xs bg-[#06202A] rounded-lg border border-none shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="relative">
            <a onClick={() => router.push(`/tvShows/${result.id}`)}>
              <Image
                className="rounded-lg w-10/12"
                src={
                  result.poster_path !== ""
                    ? setImage.width500Image(result.poster_path)
                    : setImage.noImage
                }
                alt=""
                width={230}
                height={350}
              />
            </a>

            {listDisabled ? (
              <CheckIcon
                className="bg-green-500 w-8 m-2 p-1 rounded-full absolute top-0 right-0	"
                disabled={listDisabled}
              />
            ) : (
              <PlusIcon
                className="bg-red-500 w-8 m-2 p-1 rounded-full absolute top-0 right-0 cursor-pointer	"
                onClick={() => dispatch(addMovie(result))}
              />
            )}
          </div>

          <div className="px-3  flex justify-between items-center">
            <a
              href="#"
              className="inline-flex items-center w-36 px-3 text-sm  truncate  text-center text-white capitalize tracking-normal font-bold"
            >
              {result.name}
            </a>
            <p className="text-white font-bold text-xs py-1 px-2 ml-5  bg-green-700 rounded-full hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {result.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbnailTvCard;
