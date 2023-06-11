import React, { useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarIcon from "@mui/icons-material/Star";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail } from "../../store/reducer/allProductSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: any) => state.allProduct.selectedProduct
  );

  useEffect(() => {
    if (selectedProduct && selectedProduct?.id === Number(id)) {
      return;
    }
    dispatch<any>(getProductDetail(Number(id)));
  }, [selectedProduct, id]);

  // if (!Array.isArray(selectedProduct) || !selectedProduct.length) {
  //   return <div>Loading...</div>;
  // }
  console.log(selectedProduct);

  return (
    <div className="flex items-center">
      <Carousel showArrows={true} autoPlay={true} className="w-1/2">
        {selectedProduct.images.map((item: string, index: number) => (
          <div key={index}>
            <img src={item} alt={item} className="w-full h-auto" />
          </div>
        ))}
      </Carousel>
      <Card className="max-w-xl ml-4 bg-white rounded-lg shadow-md p-8">
        <CardContent>
          <Typography variant="h5" component="div" className="font-bold mb-4">
            {selectedProduct.brand}
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mb-4">
            {selectedProduct.description}
          </Typography>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" color="primary" className="font-semibold">
              Price: ${selectedProduct.price.toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              className="text-green-500 font-semibold"
            >
              {selectedProduct.discountPercentage}% Off
            </Typography>
          </div>
          <div className="flex items-center mb-4">
            <StarIcon className="mr-2 text-yellow-500" />
            <Typography variant="body2" className="text-gray-500">
              {selectedProduct.rating}
            </Typography>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="body2" className="text-gray-500">
              Stock: {selectedProduct.stock}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Brand: {selectedProduct.brand}
            </Typography>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="body2" className="text-gray-500">
              Category: {selectedProduct.category}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetail;
