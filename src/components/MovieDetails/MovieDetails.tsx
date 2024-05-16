import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabaseConnection from "../../db/supabaseDB";
import { ETable } from "../../db/tables";
import { CommonConstants } from "../utils/CommonConstants";
import {
  ICast,
  IGenre,
  IMovieDetails,
} from "../utils/CommonInterfaces/movieDetails";
import MovieDetailBackdropSkeleton from "./MovieDetailsSkeletons/MovieDetailBackdropSkeleton";
import MovieDetailPosterSkeleton from "./MovieDetailsSkeletons/MovieDetailPosterSkeleton";
import MovieDetailsSkeleton from "./MovieDetailsSkeletons/MovieDetailsSkeleton";
import { MovieCast } from "./MovieCast/MovieCast";

const MovieDetails = () => {
  const movieOriginalSizeImageBaseURL = import.meta.env
    .VITE_MOVIE_ORIGINAL_SIZE_IMAGE_BASE_URL;

  const { movieId } = useParams<{ movieId: string }>();
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch movie details from Supabase
  const getMovieDetails = async () => {
    try {
      const {
        data: movieDetails,
        status,
        error,
      } = await supabaseConnection
        .from(ETable.MovieDetails)
        .select("*")
        .eq("id", movieId)
        .single();

      // Check if API response was successful
      if (
        [
          CommonConstants?.API_RESPONSE_SUCCESSFUL,
          CommonConstants?.API_RESPONSE_PARTIAL_RESPONSE,
        ].includes(status)
      ) {
        // Filter cast for acting department
        const actingCast: ICast[] = movieDetails.credits?.cast?.filter(
          (cast: ICast) => cast?.known_for_department === "Acting"
        );

        // Assign the filtered cast back to movieDetails
        if (actingCast) {
          movieDetails.credits.cast = actingCast;
        }
        setMovieDetails(movieDetails as IMovieDetails);
      }
      setLoading(false); // Update loading state
    } catch (error) {
      console.error(error);
    }
  };

  // Function to get release year from movie details
  const getReleaseYear = () => {
    return new Date(movieDetails?.release_date as Date)?.getFullYear();
  };

  // Fetch movie details when component mounts
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      {loading ? (
        <MovieDetailsSkeleton />
      ) : (
        <div className="min-h-screen w-full bg-zinc-200 text-black dark:bg-[#1D232A] dark:text-white">
          <div className="relative h-[65vh] w-full overflow-hidden">
            {movieDetails?.backdrop_path ? (
              <img
                alt="Movie Backdrop"
                className="h-full w-full object-cover object-top"
                src={`${movieOriginalSizeImageBaseURL}${movieDetails?.backdrop_path}`}
              />
            ) : (
              <MovieDetailBackdropSkeleton />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-200 to-transparent dark:from-[#1D232A]" />
          </div>
          <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
              <div className="relative">
                {movieDetails?.poster_path ? (
                  <img
                    alt="Movie Poster"
                    className="h-auto w-full rounded-lg shadow-lg"
                    height={450}
                    src={`${movieOriginalSizeImageBaseURL}${movieDetails?.poster_path}`}
                    style={{
                      aspectRatio: "300/450",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                ) : (
                  <MovieDetailPosterSkeleton />
                )}
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold">
                    {movieDetails?.original_title}
                  </h1>
                  <p className="mt-2 text-lg text-gray-900 dark:text-gray-400">
                    {movieDetails?.overview}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-900 dark:text-gray-400">
                      Release Year
                    </div>
                    <div className="text-lg font-medium">
                      {getReleaseYear()}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-gray-400">
                      Runtime
                    </div>
                    <div className="text-lg font-medium">
                      {movieDetails?.runtime} minutes
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-gray-400">
                      Budget
                    </div>
                    <div className="text-lg font-medium">
                      ${movieDetails?.budget}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-gray-400">
                      Revenues
                    </div>
                    <div className="text-lg font-medium">
                      ${movieDetails?.revenue}
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-900 dark:text-gray-400">
                      Status
                    </div>
                    <div className="text-lg font-medium">
                      {movieDetails?.status}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-gray-400">IMDB</div>
                    <div className="text-lg font-medium">
                      {movieDetails?.vote_average}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-900 dark:text-gray-400">Genres</div>
                  <ul className="space-x-3 flex">
                    {movieDetails?.genres?.map((genre: IGenre) => (
                      <li key={genre?.id} className="text-lg font-medium">
                        {genre?.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-gray-900 dark:text-gray-400">
                    Tagline
                  </div>
                  <div className="text-lg font-medium">
                    {movieDetails?.tagline}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-bold">Cast</h2>
              <MovieCast cast={movieDetails?.credits?.cast as ICast[]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
