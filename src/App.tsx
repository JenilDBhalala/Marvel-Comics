import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer.tsx";
import Header from "./components/header/Header.tsx";

// Lazy-loaded components
const MovieList = lazy(() => import("./components/MovieList/MovieList"));
const MovieDetails = lazy(
  () => import("./components/MovieDetails/MovieDetails")
);

function App() {
  const movieListSearchQuery = "movieListSearchQuery";
  const basename = import.meta.env.VITE_PUBLIC_URL || "/";

  // get searchQuery from local storage
  const getSearchQuery = (): string => {
    return localStorage.getItem(movieListSearchQuery) || "";
  };

  const [searchQuery, setSearchQuery] = useState(getSearchQuery());

  return (
    <BrowserRouter basename={basename}>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
