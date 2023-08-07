import React from "react";

export default function Genre({genre}) {
  return <li className="hover:bg-gray-700 w-full rounded p-2 text-darkGrey hover:transition-all hover:duration-100">{genre.name}</li>
}
