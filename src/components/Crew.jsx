import { useState, useEffect } from "react";

export default function Crew({ movieId }) {
  const [crew, setCrew] = useState([]);
  const [director, setDirector] = useState("");

  const getCrew = async () => {
    const crewRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    const crewData = await crewRes.json();

    setCrew(crewData.crew);
    
    setDirector(crew.filter((member)=> {
        return member.job === "Director"
    }));
    
  };

  useEffect(() => {
    getCrew();
    
  }, [movieId]);
  return (
    director.length !== 0 && (
        <span className="text-darkGrey">{director[0].name}</span>
    )
  );
}
