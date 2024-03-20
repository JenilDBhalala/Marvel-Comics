import Header from "./components/header/Header";
import ComicCharacterList from "./components/ComicCharacterList/ComicCharacterList";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ComicCharacterList searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Footer />
    </>
  );
}

export default App;
