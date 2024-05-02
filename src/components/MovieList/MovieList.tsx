import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import supabaseConnection from "../../db/supabaseDB";
import { IMovie } from "../utils/CommonInterfaces/movieList";
import MovieCard from "./MovieCard/MovieCard";
import MovieCardSkeleton from "./MovieCard/MovieCardSkeleton";
import { CommonConstants } from "../utils/CommonConstants";

interface MovieListProps {
  searchQuery: string;
  movieListSearchQuery: string;
}

const MovieList = ({ searchQuery, movieListSearchQuery }: MovieListProps) => {
  const moviesSearchOnColumn: string = "title";
  const movieListTable: string = "Movie_list";
  const [pageCount, setPageCount] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;
  //  used to prevent extra api call. itemOffset is already calling getMovieList so prevent from searchQuery useEffect
  const firstAPICall = useRef(true);

  // store searchQuery in local storage
  const saveSearchQuery = () => {
    localStorage.setItem(movieListSearchQuery, searchQuery);
  };

  useEffect(() => {
    getMovieList();
  }, [itemOffset]);

  useEffect(() => {
    if (!firstAPICall.current) {
      saveSearchQuery();
      setItemOffset(0);
      const fetchData = setTimeout(() => {
        getMovieList(0);
      }, 1000);
      return () => clearTimeout(fetchData);
    }
    firstAPICall.current = false;
  }, [searchQuery]);

  const getMovieList = async (initialItemOffset?: number) => {
    try {
      // if anyone changed search query then initialItemOffset will come as 0. else it will be null or undefined.
      let finalItemOffset = initialItemOffset || itemOffset;
      setLoading(true);
      const {
        data: movieList,
        status,
        count,
        error,
      } = await supabaseConnection
        .from(movieListTable)
        .select("*", { count: "exact" })
        .range(finalItemOffset, finalItemOffset + itemsPerPage - 1)
        .ilike(moviesSearchOnColumn, `%${searchQuery}%`);
      if ([CommonConstants?.API_RESPONSE_SUCCESSFUL, CommonConstants?.API_RESPONSE_PARTIAL_RESPONSE].includes(status)) {
        setMovieList(movieList as IMovie[]);
        setTotalDataLength(count as number);
        setPageCount(Math.ceil((count as number) / itemsPerPage));
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event?.selected * itemsPerPage) % totalDataLength;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-y-5 mx-3.5">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))
          : movieList?.map((movie: any) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex flex-wrap justify-center space-x-2 my-6"
        activeClassName={"px-3 py-2 rounded-full bg-gray-400 text-black "}
        previousClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
        nextClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
        pageClassName="px-3 py-2 rounded-full bg-gray-200 text-gray-700"
      />
    </>
  );
};

export default MovieList;
