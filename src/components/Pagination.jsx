import { useContext } from "react";
import { searchPageContext } from "../context/SearchPageProvider";
import { categoryPageContext } from "../context/CategoryPageProvider";

export default function Pagination({ itemKey }) {
  const [searchCurrentPage, setSearchCurrentPage] =
    useContext(searchPageContext);
  const [categoryCurrentPage, setCategoryCurrentPage] =
    useContext(categoryPageContext);

  const prevPage = () => {
    let prev = localStorage.getItem(itemKey);

    if (prev > 1) {
      let currentPage = Number(prev) - 1;
      localStorage.setItem(itemKey, currentPage);

      if (itemKey === "searchPageCxt") {
        setSearchCurrentPage(localStorage.getItem(itemKey));
      } else {
        setCategoryCurrentPage(localStorage.getItem(itemKey));
      }
    }
  };
  const nextPage = () => {
    let prev = localStorage.getItem(itemKey);

    let currentPage = Number(prev) + 1;
    localStorage.setItem(itemKey, currentPage);

    if (itemKey === "searchPageCxt") {
      setSearchCurrentPage(localStorage.getItem(itemKey));
    } else {
      setCategoryCurrentPage(localStorage.getItem(itemKey));
    }
  };

  return (
    <div className="flex items-center gap-4 pb-5">
      <button
        className="p-2 border border-green-600 rounded font-extrabold hover:bg-green-500 hover:transition-all hover:duration-100 cursor-pointer"
        onClick={prevPage}
      >
        Prev
      </button>
      <button
        className="p-2 border border-green-600 rounded font-extrabold hover:bg-green-500 hover:transition-all hover:duration-100 cursor-pointer"
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}
