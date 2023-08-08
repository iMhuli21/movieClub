import Hero from "../components/Hero";
import WeeklyTrending from "../components/WeeklyTrending";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="w-full font-poppins text-lightGrey px-5 flex flex-col items-center justify-center gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <WeeklyTrending />
    </motion.div>
  );
}
