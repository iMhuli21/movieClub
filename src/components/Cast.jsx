import { useState, useEffect } from "react";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  const getCast = async () => {
    const castRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    const castData = await castRes.json();

    setCast(castData.cast);
  };

  useEffect(() => {
    getCast();
  }, []);
  return (
    <div>
      {cast.length !== 0 &&
        cast.map((member) => (
          <span className="text-sm text-darkGrey" key={member.id}>
            {member.name},
          </span>
        ))}
    </div>
  );
}
