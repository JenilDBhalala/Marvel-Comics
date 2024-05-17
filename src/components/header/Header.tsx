import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import marvelComicsLogo from "../../../public/Marvel Comics.png";
import ThemeButton from "./themeButton/ThemeButton";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const location = useLocation();
  const currentPath = location?.pathname;

  const [theme, setTheme] = useState(localStorage?.theme);

  const handleSearch = (e: any) => {
    setSearchQuery(e?.target?.value);
  };

  const toggleTheme = () => {
    localStorage?.theme == "dark" ? disableDarkMode() : enableDarkMode();
    setTheme(localStorage?.theme);
  };

  const disableDarkMode = () => {
    console.log("disableDarkMode");
    const root = window.document.documentElement;
    root.classList.remove(localStorage.theme);
    localStorage.removeItem("theme");
  };

  const enableDarkMode = () => {
    console.log("enableDarkMode");
    const root = window.document.documentElement;
    localStorage.setItem("theme", "dark");
    root.classList.add(localStorage?.theme);
  };

  useEffect(() => {
    localStorage.theme == "dark" ? enableDarkMode() : disableDarkMode();
  }, []);

  return (
    <div className="navbar bg-slate-50 sticky top-0 z-50 dark:bg-[#161b22]">
      <div className="flex-1 w-10 ml-4">
        <img
          src={marvelComicsLogo}
          alt="Marvel comic Logo"
          className="h-16 w-20"
        />
      </div>
      <div className=" pe-4 ">
        {currentPath === "/" && (
          <div className="form-control h-10 ">
            <input
              type="text"
              placeholder="Search movies"
              className="input input-bordered border-gray-700 w-36 md:w-auto bg-white dark:bg-[#161b22]"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        )}
      </div>

      {/* <div onClick={toggleTheme}>dark mode </div> */}
      <ThemeButton toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

export default Header;
