import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import { categoryPageContext } from "../context/CategoryPageProvider";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination";
import Card from "../components/Card";

export default function GenreMovies({ genreId }) {
  const { id, category } = useParams();
  const [categoryMovies, setCategoryMovies] = useState([]);
  const [categoryCurrentPage, setCategoryCurrentPage] =
    useContext(categoryPageContext);

  const getCategoryMovies = async () => {
    const movieRes = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.desc&page=${categoryCurrentPage}&with_genres=${id}`
    );

    const movieData = await movieRes.json();

    setCategoryMovies(movieData.results);
  };

  useEffect(() => {
    getCategoryMovies();
    window.scrollTo(0, 0);
  }, [categoryCurrentPage, id]);
  return categoryMovies.length !== 0 ? (
    <motion.section
      className="font-poppins text-lightGrey bg-navy flex flex-col items-center gap-5 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="font-extrabold">Search for {category} Movies</h3>
      <div className="grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 items-center w-full lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-10">
        {categoryMovies.length !== 0 &&
          categoryMovies.map((item) => <Card movie={item} key={item.id} />)}
      </div>
      <Pagination itemKey="categoryPageCxt" />
    </motion.section>
  ) : (
    <div className="w-screen h-screen bg-navy text-lightGrey flex items-center justify-center text-2xl overflow-hidden">
      No Content....
    </div>
  );
}
