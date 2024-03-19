import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Content searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Footer />
      </div>
    </>
  );
}

export default App;
