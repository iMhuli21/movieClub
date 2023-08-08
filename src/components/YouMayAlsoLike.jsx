import { useState, useEffect } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

export default function YouMayAlsoLike({ movieId }) {
  const [similarMovies, setSimilarMovies] = useState([]);

  const getSimilarMovies = async () => {
    const moviesRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );

    const movieData = await moviesRes.json();

    setSimilarMovies(movieData.results);
  };

  useEffect(() => {
    getSimilarMovies();
    window.scrollTo(0,0);
  }, [movieId]);
  return similarMovies.length !== 0 ? (
    <motion.section className="font-poppins text-lightGrey bg-navy flex flex-col items-center gap-5 mt-5 w-full pb-5">
      <h3 className="font-extrabold">You May Also Like</h3>
      <div className="grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 items-center w-full lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-10">
        {similarMovies.length !== 0 &&
          similarMovies.map((item) => <Card movie={item} key={item.id} />)}
      </div>
    </motion.section>
  ) : (
    <div className="w-screen h-screen bg-navy text-lightGrey flex items-center justify-center text-2xl fixed oveflow-hidden">
      No Content....
    </div>
  );
}
