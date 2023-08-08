import React from "react";
import { useParams } from "react-router";
import MovieInfo from "../components/MovieInfo";
import YouMayAlsoLike from "../components/YouMayAlsoLike";
import { motion } from "framer-motion";

export default function Details() {
  const { id } = useParams();

  return (
    <motion.div
      className="w-full font-poppins text-lightGrey px-5 flex flex-col items-center justify-center gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MovieInfo movieId={id} />
      <YouMayAlsoLike movieId={id} />
    </motion.div>
  );
}
