import { IMovie } from "../../utils/CommonInterfaces/movieList";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const movieImageBaseURL = import.meta.env.VITE_MOVIE_IMAGE_BASE_URL;
  const navigate = useNavigate();

  const displayMovieDetails = () => {
    navigate(`/movie-details/${movie?.id}`);
  }

  return (
    <div className="border-solid border-slate-400 border card mx-8 md:mx-0 md:w-56 glass hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-lg">
      <figure>
        {/* when poster path is not null show poster else show dummy logo*/}
        {movie?.poster_path ? (
          <img
            className="w-full h-[410px] md:h-[333px]"
            src={movieImageBaseURL + movie?.poster_path}
            alt="Movie"
          />
        ) : (
          // dummy image logo
          <div className="flex items-center justify-center h-[410px] md:h-[333px] w-full bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        )}
      </figure>
      <div className="card-body grow-0 pb-4">
        <h2 className="card-title line-clamp-2 h-[56px] flex align-center ">{movie?.title}</h2>
        <p className="whitespace-normal line-clamp-2 h-12">
          {movie?.overview}
        </p>
      </div>
      <div className="card-actions w-full justify-end p-4">
        <button className="btn min-h-0 h-10 text-[#1e293b] bg-indigo-100 hover:bg-indigo-200 border-[#e5e7eb]"
          onClick={displayMovieDetails}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
