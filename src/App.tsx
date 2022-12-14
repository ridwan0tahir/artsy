import Footer from "components/views/Footer";
import Header from "components/views/Header";
import Home from "pages/Home";
import Marketplace from "pages/Marketplace";
import Auction from "pages/Auction";
import Drop from "pages/Drop";
import Product from "pages/Product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-satoshi text-black-02 font-medium w-screen min-h-screen bg-white-01">
      <header className="">
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/:productId" element={<Product />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/drop" element={<Drop />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
