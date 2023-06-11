import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import { IProductState } from "../../store/reducer/allProductSlice";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function ProductList() {
  const { products, isLoading, isSuccessful }: IProductState = useSelector(
    (state: any) => state.allProduct
  );

  if (isLoading) {
    return (
      <Box className="pt-1" sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (products.length === 0) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="warning">No Products to show</Alert>
      </Stack>
    );
  }

  if (!isSuccessful) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">
          {" "}
          Somthing went wrong when calling to the end point — check it out!
        </Alert>
      </Stack>
    );
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
