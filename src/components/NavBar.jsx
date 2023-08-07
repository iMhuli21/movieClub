import logo from "../assets/icons8-sunglasses-64.png";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { navContext } from "../context/NavProvider";

export default function NavBar() {
  const [showMenu, setShowMenu] = useContext(navContext);
  return (
    <nav className="flex items-center gap-4 font-poppins">
      <AiOutlineMenu
        className="ml-4 text-2xl text-lightGrey"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="flex items-center gap-2 mx-auto md:ml-3">
        <img src={logo} alt="icon" />
        <span className="text-lg text-lightGrey font-extrabold">MovieCLub</span>
      </div>

      {/*SEARCH FORM*/}
      <div className="w-4/12 hidden md:block md:mx-auto">
            <form className="w-full">
              <div className="w-full flex items-center gap-3 p-1 rounded bg-darkGrey h-12">
                <BsSearch className="text-2xl text-lightGrey ml-2" />
                <input
                  type="text"
                  name="searchMain"
                  id="searchMain"
                  className="bg-inherit placeholder:text-lightGrey outline-none"
                  placeholder="Search for anything..."
                />
              </div>
            </form>
          </div>
    </nav>
  );
}
