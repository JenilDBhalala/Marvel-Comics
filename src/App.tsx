import { useState } from "react";
import MovieList from "./components/MovieList/MovieList.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";
import './App.css'
import MovieDetailsSkeleton from "./components/MovieDetails/MovieDetailsSkeletons/MovieDetailsSkeleton.tsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.tsx";

function App() {
  const movieListSearchQuery = "movieListSearchQuery";

  // get searchQuery from local storage
  const getSearchQuery = (): string => {
    return localStorage.getItem(movieListSearchQuery) || "";
  };

  const [searchQuery, setSearchQuery] = useState(getSearchQuery());

  return (
    <div className="bg-slate-100 h-screen no-scrollbar">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* <MovieList
        searchQuery={searchQuery}
        movieListSearchQuery={movieListSearchQuery}
      /> */}
      {/* <MovieDetails/> */}
      <MovieDetailsSkeleton/>
      <Footer />
    </div>
  );
}

export default App;
