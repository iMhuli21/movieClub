import { createContext, useState } from "react";

export const categoryPageContext = createContext();

export default function CategoryPageProvider({ children }) {
  const [categoryCurrentPage, setCategoryCurrentPage] = useState(localStorage.getItem("categoryPageCxt"));

  return (
    <categoryPageContext.Provider value={[categoryCurrentPage, setCategoryCurrentPage]}>
      {children}
    </categoryPageContext.Provider>
  );
}
