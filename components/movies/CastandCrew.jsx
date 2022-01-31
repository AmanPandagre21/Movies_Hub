import { setImage } from "../../pages/api/apiconfig.js";

const CastandCrew = ({ cast }) => {
  return (
    <>
      <img
        src={
          cast.profile_path !== null
            ? setImage.originalImage(cast.profile_path)
            : setImage.noImage
        }
        className="flex-auto w-28 rounded-lg"
      ></img>
      <h2 className="">{cast.name}</h2>
    </>
  );
};

export default CastandCrew;
