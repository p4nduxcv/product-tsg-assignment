import "./App.css";
import Header from "./components/layout/Header";
import ProductCard from "./components/common/ProductCard";
import ProductDetail from "./components/common/ProductDetail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/reducer/allProductSlice";
import ProductList from "./components/product/ProductList";

function App() {
  const dispatch = useDispatch();
  const product = {
    title: "Product Name",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    ],
  };

  useEffect(() => {
    dispatch<any>(getAllProducts());
  }, []);

  return (
    <>
      <Header />
      <ProductList />
      {/* <ProductDetail /> */}
    </>
  );
}

export default App;
