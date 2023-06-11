import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import { IProductCard } from "../common/types/IProductCard";

function ProductList() {
  const products = useSelector((state: any) => state.allProduct.products);
  // const products: Array<IProductCard> = allProductState.products.products;

  // useEffect(() => {
  //   console.log(allProductState.products.products);
  // }, []);

  if (!Array.isArray(products) || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {products.map((product, index) => {
          return <ProductCard key={index} cardData={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
