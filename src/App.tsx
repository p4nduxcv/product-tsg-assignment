import "./App.css";
import Header from "./components/layout/Header";
import ProductDetail from "./components/product/ProductDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/reducer/allProductSlice";
import ProductList from "./components/product/ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllProducts());
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
