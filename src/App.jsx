import { Header } from "./features/layout/components/Header";
import { Content } from "./features/layout/components/Content";
import { Footer } from "./features/layout/components/Footer";
import { Offer } from "./features/view/components/Offer";
import { Favorite } from "./features/auth/Components/Favorite";
import { Shopping } from "./features/auth/Components/Shopping";
import { Account } from "./features/auth/Components/Account";
import { Article } from "./features/view/components/Article";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Account" element={<Account />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
