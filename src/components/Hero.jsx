import { BsFillPlayFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { imageBaseUrl, backdropSizes } from "../utils/imageSizes";
import { genreContext } from "../context/GenreProvider";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function Hero() {
  let heroGenresArr = [];
  const [hero, setHero] = useState([]);
  const { genres } = useContext(genreContext);
  const [heroGenres, setHeroGenres] = useState("");
  const navigate = useNavigate();

  const getHero = async () => {
    const heroRes = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const heroData = await heroRes.json();

    setHero(heroData.results[0]);

    heroData.results[0].genre_ids.forEach((genre_id) => {
      genres.forEach((genre) => {
        if (genre.id === genre_id) {
          heroGenresArr.push(genre.name);
        }
      });
    });

    setHeroGenres(heroGenresArr.toString());
  };

  useEffect(() => {
    getHero();
  }, [heroGenres]);
  return Object.keys(hero).length !== 0 ? (
    <motion.section className="hero relative rounded-xl w-full h-96 overflow-hidden mt-5 xl:w-10/12 xl:mx-auto">
      <img
        src={imageBaseUrl + backdropSizes.lg + hero.backdrop_path}
        alt="movie poster"
        className="absolute w-full h-full object-cover
        object-center brightness-50"
      />
      <div className="absolute flex items-start w-full flex-col justify-center p-2 text-white gap-3">
        <h1 className="font-extrabold text-lg">{hero.title}</h1>
        <div className="flex items-center gap-4">
          <span>{hero.release_date?.split("-")[0]}</span>
          <span className="bg-lightBg p-1 rounded">{hero.vote_average}</span>
          <AiFillStar className="text-2xl text-orange-600" />
        </div>
        <span className="w-full">{heroGenres}</span>
        <p>{hero.overview}</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 bg-red-500 p-2 rounded hover:opacity-80 hover:transition-opacity hover:duration-200 hover:cursor-pointer">
            <BsFillPlayFill className="text-2xl" />
            <span>Play</span>
          </div>
          <div
            className="flex items-center gap-2 bg-gray-400 p-2 rounded hover:opacity-80 hover:transition-opacity hover:duration-200 hover:cursor-pointer"
            onClick={() => navigate(`/details/${hero.id}`)}
          >
            <FaInfoCircle className="text-2xl" />
            <span>Info</span>
          </div>
        </div>
      </div>
    </motion.section>
  ) : (
    <div className="w-screen h-screen bg-navy text-lightGrey flex items-center justify-center text-2xl fixed overflow-x-hidden overflow-y-hidden">
      No Content....
    </div>
  );
}
