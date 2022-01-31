import { useRouter } from "next/router";
import { setImage, detailsApis } from "../../pages/api/apiconfig";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import CardsSlider from "../../components/CardsSlider";
import MoviesDetails from "../../components/MoviesDetails";

export async function getServerSideProps(params) {
  const { id } = params.query;

  const apis = {
    detail: detailsApis.deatils(id, "movie"),
    credit: detailsApis.credits(id, "movie"),
    similar: detailsApis.similar(id, "movie"),
    videos: detailsApis.videos(id, "movie"),
  };

  try {
    const [detailRes, castRes, similarRes, videoRes] = await Promise.all([
      fetch(apis.detail),
      fetch(apis.credit),
      fetch(apis.similar),
      fetch(apis.videos),
    ]);

    const [movieDetail, castandcrew, similar, video] = await Promise.all([
      detailRes.json(),
      castRes.json(),
      similarRes.json(),
      videoRes.json(),
    ]);

    return {
      props: {
        details: movieDetail,
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
        <div className="bg-black opacity-20">
          <img
            src={
              details
                ? setImage.originalImage(details.backdrop_path)
                : "/gallary.jpg"
            }
            className="w-full max-h-screen"
          ></img>
        </div>

        {/* front section  */}

        <MoviesDetails details={details} cast={cast} trailer={video} />
      </div>

      <CardsSlider movie={similar} title="Similar Movies" flag="movie" />

      <BottomNav />
    </>
  );
};

export default movieId;
