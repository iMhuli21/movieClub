import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import { imageBaseUrl, posterSizes } from "../utils/imageSizes";
import { AiFillStar } from "react-icons/ai";
import { genreContext } from "../context/GenreProvider";
import { useNavigate } from "react-router";
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

  };

  useEffect(() => {
    getMovieInformation();
  }, []);
  return (
    Object.keys(movieInformation).length !== 0 && (
      <section className="bg-navy w-full mt-5 flex flex-col items-start gap-5">
        <BiArrowBack
          className="text-2xl text-lightGrey"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-col items-center gap-2">
          {/*POSTER*/}
          <div>
            <img
              src={imageBaseUrl + posterSizes.lg + movieInformation.poster_path}
              alt="movie poster"
              className="rounded-xl h-96"
            />
          </div>
          {/*MOVIE INFORMATION*/}
          <div className="flex flex-col items-center justify-center gap-2">
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
      </section>
    )
  );
}
