import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import CardsGrid from "../components/CardsGrid";
import { movies_and_tv_apis } from "../pages/api/apiconfig";

const endPoint = movies_and_tv_apis.discover("movie", 1);

export async function getServerSideProps(context) {
  try {
    const res = await fetch(endPoint);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return { props: { error: e.message } };
  }
}

const movies = ({ data }) => {
  const { results: defaultResults = [] } = data;
  const [discovermovies, setDiscoverMovies] = useState(defaultResults);
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);
  const [defaultEndPoint, setDefaultEndPoint] = useState({
    defaultendpoint: endPoint,
    category: "page",
  });
  const { defaultendpoint, category } = defaultEndPoint;

  useEffect(() => {
    if (defaultendpoint === endPoint) return;

    async function request() {
      try {
        const res = await fetch(defaultendpoint);
        const newData = await res.json();
        const { results: newResults = [] } = newData;

        if (category === "page") {
          setDiscoverMovies((prev) => {
            return [...prev, ...newResults];
          });
        } else {
          setDiscoverMovies(newResults);
        }
      } catch (e) {
        return e.message;
      }
      return;
    }

    request();
  }, [defaultEndPoint]);

  const pageHandler = () => {
    setPage(++page);

    setDefaultEndPoint((prev) => {
      return {
        defaultendpoint: movies_and_tv_apis.discover("movie", page),
        category: "page",
      };
    });
  };

  const handleOnSubmitSearch = (e) => {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");
    const value = fieldQuery.value || "";

    const searchPoint = movies_and_tv_apis.search("movie", value, 1);
    setDefaultEndPoint((prev) => {
      return { defaultendpoint: searchPoint, category: "search" };
    });
    setFlag(true);
  };

  return (
    <>
      <Header />
      <h1 className="uppercase text-green-300 tracking-widest"></h1>
      <div className="flex justify-center my-5">
        <form className="search" onSubmit={handleOnSubmitSearch}>
          <input
            name="query"
            type="search"
            className="w-80 h-9 rounded bg-green-800 outline-0 capitalize px-3"
            placeholder="search Here..."
          />
          <button className="w-24 h-9 bg-transparent rounded border-2 border-green-800 mx-1 hover:bg-green-800 hover:border-white">
            Search
          </button>
        </form>
      </div>

      <CardsGrid movie={discovermovies} title="movies" flag="movie" />
      <div className="flex justify-center items-center mb-9 md:mb-9 mt-0 sm:mb-16">
        {flag ? (
          ""
        ) : (
          <button
            className="w-64 h-12 bg-green-600 hover:bg-green-800 rounded text-xl uppercase font-semibold"
            onClick={pageHandler}
          >
            Load More
          </button>
        )}
      </div>
      <BottomNav />
    </>
  );
};

export default movies;
