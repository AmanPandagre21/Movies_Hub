import { setImage } from "../../pages/api/apiconfig";

const Seasons = ({ season }) => {
  return (
    <>
      <div className="flex md:w-4/4 my-2 md:mx-3">
        <img
          src={
            season.poster_path !== null
              ? setImage.width500Image(season.poster_path)
              : setImage.noImage
          }
          className="w-40 h-auto md:h-auto md:w-44 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        />

        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-green-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <h1 className="text-white font-bold text-xl mb-2">{season.name}</h1>
            <p className="text-sm text-green-400 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              {season.air_date} | {season.episode_count} Episodes
            </p>
            <p className="text-white text-xs md:text-sm my-3">
              {season.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seasons;
