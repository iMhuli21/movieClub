import logo from "../assets/icons8-sunglasses-64.png";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useContext, useState } from "react";
import { navContext } from "../context/NavProvider";
import { useNavigate } from "react-router";

export default function NavBar() {
  const [showMenu, setShowMenu] = useContext(navContext);
  const [userSearch, setUserSearch] = useState("");
  const navigate = useNavigate();

  const searchForMovie = (e) => {
    e.preventDefault();

    localStorage.setItem("searchPageCxt", 1);

    navigate(`/search/${userSearch}`);

    setUserSearch("");
  };

  return (
    <nav className="flex items-center gap-4 font-poppins">
      <AiOutlineMenu
        className="ml-4 text-2xl text-lightGrey hover:cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="flex items-center gap-2 mx-auto md:ml-3">
        <img src={logo} alt="icon" />
        <span
          className="text-lg text-lightGrey font-extrabold hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          MovieCLub
        </span>
      </div>

      {/*SEARCH FORM*/}
      <div className="w-4/12 hidden md:block md:mx-auto">
        <form className="w-full" onSubmit={searchForMovie}>
          <div className="w-full flex items-center gap-3 p-1 rounded bg-darkGrey h-12">
            <BsSearch className="text-2xl text-lightGrey ml-2" />
            <input
              type="text"
              name="searchMain"
              id="searchMain"
              className="bg-inherit placeholder:text-lightGrey outline-none w-full text-lightGrey select-none"
              placeholder="Search for anything..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
