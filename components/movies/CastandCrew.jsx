import { setImage } from "../../pages/api/apiconfig.js";

const CastandCrew = ({ cast }) => {
  return (
    <>
      <div className="rounded">
        <div className="w-32 h-auto">
          <img
            src={
              cast.profile_path !== null
                ? setImage.originalImage(cast.profile_path)
                : setImage.noImage
            }
            className="rounded-lg"
          ></img>
        </div>

        <div className="w-32 h-auto  py-5">
          <h2 className="text-green-500">{cast.name}</h2>
          <h3 className="text-gray uppercase font-bold text-xs  ">
            "{cast.character}"
          </h3>
        </div>
      </div>
    </>
  );
};

export default CastandCrew;
