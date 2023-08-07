import Hero from "../components/Hero";
import WeeklyTrending from "../components/WeeklyTrending";

export default function Home() {
  
  return (
    <div className="w-full font-poppins text-lightGrey px-5 flex flex-col items-center justify-center gap-5">
      <Hero/>
      <WeeklyTrending/>
    </div>
  );
}
