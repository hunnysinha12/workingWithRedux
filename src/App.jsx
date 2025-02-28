import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import store from "./store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
