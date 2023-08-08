import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NavBar from "./components/NavBar";
import NavProvider from "./context/NavProvider";
import SideNavBar from "./components/SideNavBar";
import GenreProvider from "./context/GenreProvider";
import Search from "./pages/Search";
import SearchPageProvider from "./context/SearchPageProvider";
import GenreMovies from "./pages/GenreMovies";
import CategoryPageProvider from "./context/CategoryPageProvider";

const App = () => {
  const location = useLocation();
  return (
    <NavProvider>
      <GenreProvider>
        <SearchPageProvider>
          <CategoryPageProvider>
            <div className="relative bg-navy w-full h-full">
              <NavBar />
              <SideNavBar />
              <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/details/:id" element={<Details />} />
                  <Route path="/search/:search" element={<Search />} />
                  <Route
                    path="/movies/:id/:category"
                    element={<GenreMovies />}
                  />
                </Routes>
              </AnimatePresence>
            </div>
          </CategoryPageProvider>
        </SearchPageProvider>
      </GenreProvider>
    </NavProvider>
  );
};

export default App;
