import Header from "./components/header/Header";
import ComicCharacterList from "./components/ComicCharacterList/ComicCharacterList";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const characterListSearchQuery = "characterListSearchQuery";
  
  // get searchQuery from local storage
  const getSearchQuery = (): string => {
    return localStorage.getItem(characterListSearchQuery) || "";
  };

  const [searchQuery, setSearchQuery] = useState(getSearchQuery());

  return (
    <div className="bg-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ComicCharacterList
        searchQuery={searchQuery}
        characterListSearchQuery={characterListSearchQuery}
      />
      <Footer />
    </div>
  );
}

export default App;
