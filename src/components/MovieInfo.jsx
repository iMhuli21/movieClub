import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { imageBaseUrl, posterSizes } from "../utils/imageSizes";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Cast from "./Cast";
import Crew from "./Crew";

export default function MovieInfo({ movieId }) {
  const [movieInformation, setMovieInformation] = useState({});

  const navigate = useNavigate();

  const getMovieInformation = async () => {
    const movieRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    const movieData = await movieRes.json();

    setMovieInformation(movieData);
    }

  useEffect(() => {
    getMovieInformation();
  }, [movieId]);
  return Object.keys(movieInformation).length !== 0 ? (
    <motion.section className="bg-navy w-full mt-5 flex flex-col items-start gap-5">
      <BiArrowBack
        className="text-2xl text-lightGrey cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-col items-center gap-2 xl:flex-row xl:">
        {/*POSTER*/}
        <div className="md:w-full flex items-center justify-center xl:w-6/12">
          <img
            src={imageBaseUrl + posterSizes.lg + movieInformation.poster_path}
            alt="movie poster"
            className="rounded-xl h-96 md:h-[34rem] md:w-6/12 md:object-cover xl:w-10/12"
          />
        </div>
        {/*MOVIE INFORMATION*/}
        <div className="flex flex-col items-center justify-center gap-2 md:w-10/12 xl:w-6/12">
          <h1 className="font-extrabold">{movieInformation.title}</h1>
          {/*MOVIE DETAILS*/}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <AiFillStar className="text-2xl text-orange-600 " />
              <span>{movieInformation.vote_average?.toFixed(1)}</span>
            </div>
            <span>{movieInformation.runtime}m</span>
            <span className="bg-lightBg p-1 rounded">
              {movieInformation.release_date?.split("-")[0]}
            </span>
          </div>
          {/*MOVIE GENRES*/}
          <div className="flex items-center gap-2">
            {movieInformation.genres.map((genre) => (
              <span className="text-sm" key={genre.id}>
                {genre.name},
              </span>
            ))}
          </div>
          <p className="text-darkGrey text-sm">{movieInformation.overview}</p>
          {/*MOVE CAST*/}
          <div className="w-full flex flex-col items-start gap-2">
            <h3>Starring</h3>
            <Cast movieId={movieInformation.id} />
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <h3>Directed By</h3>
            <Crew movieId={movieInformation.id} />
          </div>
        </div>
      </div>
    </motion.section>
  ) : (
    <div className="w-screen h-screen bg-navy text-lightGrey flex items-center justify-center text-2xl fixed overflow-hidden">
      No Content....
    </div>
  );
}
