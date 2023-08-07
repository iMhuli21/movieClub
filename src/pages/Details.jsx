import React from "react";
import { useParams } from "react-router";
import MovieInfo from "../components/MovieInfo";

export default function Details() {
  const { id } = useParams();

  return (
    <div className="w-full font-poppins text-lightGrey px-5 flex flex-col items-center justify-center gap-5">
      <MovieInfo movieId={id}/>
    </div>
  );
}
