import { useNavigate } from "react-router";
import { navContext } from "../context/NavProvider";
import { useContext } from "react";

export default function Genre({ genre }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useContext(navContext);

  const getGenreMovies = (id,genre) => {
    setShowMenu(!showMenu);
    localStorage.setItem("categoryPageCxt", 1);
    navigate(`/movies/${id}/${genre}`);
  };

  return (
    <li
      className="hover:bg-gray-700 w-full rounded p-2 text-darkGrey hover:transition-all hover:duration-100 hover:cursor-pointer"
      onClick={() => getGenreMovies(genre.id, genre.name)}
    >
      {genre.name}
    </li>
  );
}
