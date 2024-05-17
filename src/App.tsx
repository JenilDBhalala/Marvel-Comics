import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieDetails from "./components/MovieDetails/MovieDetails.tsx";
import MovieList from "./components/MovieList/MovieList.tsx";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";

function App() {
  const movieListSearchQuery = "movieListSearchQuery";
  const basename = import.meta.env.VITE_PUBLIC_URL || '/';

  // get searchQuery from local storage
  const getSearchQuery = (): string => {
    return localStorage.getItem(movieListSearchQuery) || "";
  };

  const [searchQuery, setSearchQuery] = useState(getSearchQuery());

  return (
    <BrowserRouter basename={`${basename}`}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="no-scrollbar">
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route
            index
            element={
              <MovieList
                searchQuery={searchQuery}
                movieListSearchQuery={movieListSearchQuery}
              />
            }
          />
          <Route path="movie-details/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
