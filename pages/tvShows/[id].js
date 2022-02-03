import { useRouter } from "next/router";
import { detailsApis, setImage } from "../api/apiconfig";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import CardsSlider from "../../components/CardsSlider";
import TVDetails from "../../components/tv_shows/TVDetails";
import Seasons from "../../components/tv_shows/Seasons";

export async function getServerSideProps(params) {
  const { id } = params.query;

  const apis = {
    detail: detailsApis.deatils(id, "tv"),
    credit: detailsApis.credits(id, "tv"),
    similar: detailsApis.similar(id, "tv"),
    videos: detailsApis.videos(id, "tv"),
  };

  try {
    const [detailRes, castRes, similarRes, videoRes] = await Promise.all([
      fetch(apis.detail),
      fetch(apis.credit),
      fetch(apis.similar),
      fetch(apis.videos),
    ]);

    const [tvDetail, castandcrew, similar, video] = await Promise.all([
      detailRes.json(),
      castRes.json(),
      similarRes.json(),
      videoRes.json(),
    ]);

    return {
      props: {
        details: tvDetail,
        cast: castandcrew.cast,
        similar: similar.results,
        video: video.results,
      },
    };
  } catch (e) {
    return { props: { error: e.message } };
  }
}

const movieId = ({ details, cast, similar, video }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      {/* background Image  */}
      <div className="relative">
        <div className="md:bg-black md:opacity-20">
          <img
            src={
              details
                ? details.backdrop_path === null
                  ? "/gallary.jpg"
                  : setImage.originalImage(details.backdrop_path)
                : "/gallary.jpg"
            }
            className="w-full max-h-screen"
          ></img>
        </div>

        {/* front section  */}

        <TVDetails details={details} cast={cast} trailer={video} />
      </div>

      <div className="my-3 md:my-0 mx-8 md:p-8 md:mx-0 md:bg-black">
        <h1 className="w-36 px-4 py-2 border-4 border-green-500  rounded-full my-6 text-xl uppercase font-bold">
          Seasons
        </h1>
        <div className="md:grid md:grid-cols-2">
          {details &&
            details.seasons.map((ele) => {
              return <Seasons key={ele.id} season={ele} />;
            })}
        </div>
      </div>

      <CardsSlider movie={similar} title="Similar Tv SHows" flag="tv" />

      <BottomNav />
    </>
  );
};

export default movieId;
