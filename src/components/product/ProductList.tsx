import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import { IProductState } from "../../store/reducer/allProductSlice";

function ProductList() {
  const { products, isLoading }: IProductState = useSelector(
    (state: any) => state.allProduct
  );

  if (isLoading) {
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
