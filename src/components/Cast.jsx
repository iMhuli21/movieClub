import { useState, useEffect, useRef } from "react";

const paragraphStyle = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const paragraphRef = useRef();

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
  }, [movieId]);
  return (
    <div className="flex flex-col items-center justify-center gap-4 transition-all duration-75 ">
      <div style={!showMore ? paragraphStyle : null} ref={paragraphRef}>
        {cast.length !== 0 &&
          cast.map((member) => (
            <span className="text-sm text-darkGrey" key={member.id}>
              {member.name},
            </span>
          ))}
      </div>
      <button className="p-1" onClick={()=> setShowMore(!showMore)}>{showMore? "Show Less": "Show More"}</button>
    </div>
  );
}
