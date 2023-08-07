import { imageBaseUrl, posterSizes } from "../utils/imageSizes";
import { useNavigate } from "react-router";
import { AiFillStar } from "react-icons/ai";

export default function Card({movie}) {
    const navigate = useNavigate();
  return (
    <div className="w-9/12 overflow-hidden rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-lightBg hover:transition-all hover:duration-300 hover:cursor-pointer h-[30rem]"
    onClick={()=> navigate(`details/${movie.id}`)}>
        <img src={imageBaseUrl+posterSizes.lg+movie.poster_path} alt="poster path" className="w-full object-cover h-96 object-center"/>
        <div className="flex items-center gap-3">
            <span className="font-extrabold">{movie.release_date?.split("-")[0]}</span>
            <div className="flex items-center gap-2">
              <AiFillStar className="text-2xl text-orange-600"/>
            <span className="bg-lightBg p-1 rounded">{movie.vote_average?.toFixed(1)}</span>
            </div>
        </div>
        <h3 className="font-extrabold text-lg text-center">{movie.title}</h3>
    </div>
  )
}
