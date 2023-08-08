import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import { searchPageContext } from "../context/SearchPageProvider";
import { motion } from "framer-motion";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

export default function Search() {
  const { search } = useParams();
  const [searchCurrentPage] = useContext(searchPageContext);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const getSearchedMovies = async () => {
    const movieRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&&query=${search}&page=${searchCurrentPage}`
    );

    const movieData = await movieRes.json();

    setSearchedMovies(movieData.results);
  };

  useEffect(() => {
    getSearchedMovies();
    window.scrollTo(0, 0);
  }, [searchCurrentPage, search]);

  return searchedMovies?.length !== 0 ? (
    <motion.section
      className="font-poppins text-lightGrey bg-navy flex flex-col items-center gap-5 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="font-extrabold">Search for {search}</h3>
      <div className="grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 items-center w-full lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-10">
        {searchedMovies?.length !== 0 &&
          searchedMovies?.map((item) => <Card movie={item} key={item.id} />)}
      </div>

      <Pagination itemKey="searchPageCxt" />
    </motion.section>
  ) : (
    <div className="w-screen h-screen bg-navy text-lightGrey flex items-center justify-center text-2xl overflow-hidden">
      No Content....
    </div>
  );
}
