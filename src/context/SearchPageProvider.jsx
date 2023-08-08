import { createContext, useState, useEffect} from "react";

export const searchPageContext = createContext();

export default function SearchPageProvider({children}) {
    const [searchCurrentPage, setSearchCurrentPage] = useState(localStorage.getItem("searchPageCxt"));

  return (
    <searchPageContext.Provider value={[searchCurrentPage, setSearchCurrentPage]}>
        {children}
    </searchPageContext.Provider>
  )
}
