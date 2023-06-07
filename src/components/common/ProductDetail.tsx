import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarIcon from "@mui/icons-material/Star";

function ProductDetail() {
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
  };

  const carouselItems = [
    {
      image: "https://i.dummyjson.com/data/products/1/1.jpg",
      legend: "Legend 1",
    },
    {
      image: "https://i.dummyjson.com/data/products/1/4.jpg",
      legend: "Legend 2",
    },
  ];
  return (
    <div className="flex items-start">
      <Carousel showArrows={true} autoPlay={true} className="w-1/2">
        {carouselItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.legend} className="w-full h-auto" />
            <p className="legend text-center">{item.legend}</p>
          </div>
        ))}
      </Carousel>
      <Card className="max-w-xl ml-4 bg-white rounded-lg shadow-md p-8">
        <CardContent>
          <Typography variant="h5" component="div" className="font-bold mb-4">
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mb-4">
            {product.description}
          </Typography>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6" color="primary" className="font-semibold">
              Price: ${product.price.toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              className="text-green-500 font-semibold"
            >
              {product.discountPercentage}% Off
            </Typography>
          </div>
          <div className="flex items-center mb-4">
            <StarIcon className="mr-2 text-yellow-500" />
            <Typography variant="body2" className="text-gray-500">
              {product.rating}
            </Typography>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="body2" className="text-gray-500">
              Stock: {product.stock}
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Brand: {product.brand}
            </Typography>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Typography variant="body2" className="text-gray-500">
              Category: {product.category}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetail;
