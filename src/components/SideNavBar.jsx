import { useContext } from "react";
import { navContext } from "../context/NavProvider";
import { genreContext } from "../context/GenreProvider";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Genre from "./Genre";

export default function SideNavBar() {
  const [showMenu, setShowMenu] = useContext(navContext);
  const { genres } = useContext(genreContext);

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          className="fixed z-10 top-0 left-0 bg-navy w-full h-full px-5 py-2 flex flex-col items-start gap-5 font-poppins overflow-scroll xsm:w-8/12 lg:w-6/12 xl:w-3/12"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ x: -1000 }}
        >
          <div className="w-full flex justify-end">
            <AiOutlineClose
              className="text-2xl text-lightGrey mt-2 hover:cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          {/*SEARCH FORM*/}
          <div className="w-full">
            <form className="w-full">
              <div className="w-full flex items-center gap-3 p-1 rounded bg-darkGrey h-12 text-lightGrey">
                <BsSearch className="text-2xl text-lightGrey ml-2" />
                <input
                  type="text"
                  name="searchSide"
                  id="searchSide"
                  className="bg-inherit placeholder:text-lightGrey outline-none w-full"
                  placeholder="Search for anything..."
                />
              </div>
            </form>
          </div>
          {/*GENRES*/}
          <div className="w-full">
            <h3 className="text-lg font-extrabold text-lightGrey">Genre</h3>
            <ul className="w-full flex flex-col items-start gap-4">
              {genres.length !== 0 &&
                genres.map((item) => <Genre genre={item} key={item.id} />)}
            </ul>
          </div>
          {/*LANGUAGE*/}
          <div className="w-full flex flex-col items-start gap-2">
                <h3 className="text-lg font-extrabold text-lightGrey">Language</h3>
                <span className="text-darkGrey">English</span>
          </div>
          {/*COPYRIGHT*/}
          <div className="w-full flex items-start gap-2 text-lightGrey text-lg font-extrabold">
                <h3>Mushavi</h3>
                <span>&copy;</span>
                <span>2023</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
