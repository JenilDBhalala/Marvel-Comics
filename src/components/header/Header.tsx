import marvelComicsLogo from "../../../public/Marvel Comics.png";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  const handleSearch = (e: any) => {
    setSearchQuery(e?.target?.value);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 ts">
      <div className="flex-1 w-10">
        <img
          src={marvelComicsLogo}
          alt="Marvel comic Logo"
          className="h-20 w-24"
        />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            value={searchQuery}
            onChange={handleSearch} // Trigger search on each keystroke
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
