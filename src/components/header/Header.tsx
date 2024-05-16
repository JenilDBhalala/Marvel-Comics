import { useLocation } from "react-router";
import marvelComicsLogo from "../../../public/Marvel Comics.png";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const location = useLocation();
  const currentPath = location?.pathname;

  const handleSearch = (e: any) => {
    setSearchQuery(e?.target?.value);
  };

  return (
    <div className="navbar bg-slate-50 sticky top-0 z-50 dark:bg-[#161b22]">
      <div className="flex-1 w-10 ml-4">
        <img
          src={marvelComicsLogo}
          alt="Marvel comic Logo"
          className="h-16 w-20"
        />
      </div>
      <div className="flex-none pe-4 ">
        {currentPath === "/" && (
          <div className="form-control h-10 ">
            <input
              type="text"
              placeholder="Search movies"
              className="input input-bordered w-36 md:w-auto bg-white dark:bg-[#161b22]"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
