import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IProductCard } from "./types/IProductCard";

function ProductCard(props: IProductCard) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://i.dummyjson.com/data/products/7/thumbnail.jpg"
          title="green iguana"
        />
        <CardContent>
          <div className="flex justify-between">
            {" "}
            <Typography gutterBottom variant="h5" component="div">
              Samsung Universe 9
            </Typography>
            <Chip label="RS 1400" color="error" />
          </div>

          <Typography gutterBottom variant="body2" color="text.secondary">
            An apple mobile which is nothing like apple
          </Typography>

          <Chip icon={<StarIcon />} label="8" size="small" color="warning" />
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductCard;
