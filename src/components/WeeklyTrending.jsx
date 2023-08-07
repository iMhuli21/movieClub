import Card from "./Card";
import { useState, useEffect } from "react";

export default function WeeklyTrending() {
  const [weeklyTrendingMovies, setWeeklyTrendingMovies] = useState([]);

  const getWeeklyTrendingMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );

    const data = await res.json();

    setWeeklyTrendingMovies(data.results);
  };

  useEffect(() => {
    getWeeklyTrendingMovies();
  }, []);
  return (
    <section className="font-poppins text-lightGrey bg-navy flex flex-col items-center gap-5">
      <h3 className="font-extrabold">Weekly Trending Movies</h3>
      <div className="grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-2 items-center w-full lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-10">
        {weeklyTrendingMovies.length !== 0 &&
          weeklyTrendingMovies.map((item) => (
            <Card movie={item} key={item.id} />
          ))}
      </div>
    </section>
  );
}
