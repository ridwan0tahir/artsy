import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import Home from 'pages/Home';
import Marketplace from 'pages/Marketplace';
import Auction from 'pages/Auction';
import Drop from 'pages/Drop';
import Product from 'pages/Product';
import { Outlet, Route, Routes } from 'react-router-dom';
import Checkout from '@pages/Checkout';
import { useAppDispatch, useAppSelector } from '@store/store';
import { useEffect } from 'react';
import { calculateTotal } from '@store/cart/CartSlice';
import Shipping from '@pages/Shipping';
import Payment from '@pages/Payment';

function App() {
  const { products } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [products]);

  return (
    <div
      className="font-satoshi text-black-02 font-medium 
      w-screen min-h-screen bg-white-01"
    >
      <header className="">
        <Header />
      </header>

      <main className="px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="marketplace">
            <Route index element={<Marketplace />} />
            <Route path=":productId" element={<Product />} />
            <Route path="checkout">
              <Route index element={<Checkout />} />
              <Route path="shipping">
                <Route index element={<Shipping />} />
                <Route path="payment" element={<Payment />} />
              </Route>
            </Route>
          </Route>
          <Route path="auction" element={<Auction />} />
          <Route path="drop" element={<Drop />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
