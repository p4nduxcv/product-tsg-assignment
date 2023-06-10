import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import { IProductCard } from "../common/types/IProductCard";

function ProductList() {
  const allProductState = useSelector((state: any) => state.allProduct);
  const products: Array<IProductCard> = allProductState.products.products;

  // useEffect(() => {
  //   console.log(allProductState.products.products);
  // }, []);

  if (!Array.isArray(products) || !products.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {products.map((product) => {
          return <ProductCard cardData={product} />;
        })}
      </div>
    </>
  );
}

export default ProductList;
