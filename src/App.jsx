import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NavBar from "./components/NavBar";
import NavProvider from "./context/NavProvider";
import SideNavBar from "./components/SideNavBar";
import GenreProvider from "./context/GenreProvider";

const App = () => {
  return (
    <NavProvider>
      <GenreProvider>
        <div className="relative bg-navy w-full h-full">
          <NavBar />
          <SideNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </GenreProvider>
    </NavProvider>
  );
};

export default App;
