import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import ProductCard from "./components/common/ProductCard";
import ProductDetail from "./components/common/ProductDetail";

function App() {
  const product = {
    title: "Product Name",
    thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    ],
  };

  return (
    <>
      <Header />

      <ProductCard
        title={product.title}
        thumbnail={product.thumbnail}
        images={product.images}
      />

      <ProductDetail />
    </>
  );
}

export default App;
