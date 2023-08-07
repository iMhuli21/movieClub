import {createContext, useState, useEffect} from "react";

export const genreContext = createContext();

export default function GenreProvider({children}) {
    const [genres, setGenres] = useState([]);

    const getGenres = async () =>{
        const res= await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`);

        const data = await res.json();

        setGenres(data.genres);
    }
    useEffect(()=>{
        getGenres()
    },[])
  return (
        <genreContext.Provider value={{genres}}>
            {children}
        </genreContext.Provider>
  )
}
