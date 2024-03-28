import Header from "./components/header/Header";
import ComicCharacterList from "./components/ComicCharacterList/ComicCharacterList";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-slate-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ComicCharacterList
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Footer />
    </div>
  );
}

export default App;
