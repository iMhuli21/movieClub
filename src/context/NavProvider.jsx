import { createContext, useState } from "react";

export const navContext = createContext();

export default function NavProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <navContext.Provider value={[showMenu, setShowMenu]}>
      {children}
    </navContext.Provider>
  );
}
