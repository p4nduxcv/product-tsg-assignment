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
import { useNavigate } from "react-router";

interface Props {
  cardData: IProductCard;
}

function ProductCard({
  cardData: { id, title, thumbnail, description, rating, price },
}: Props) {
  const navigate = useNavigate();
  const productDetailedViewHandler = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="p-3">
      <Card sx={{ width: 400, height: 400 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={thumbnail}
          title="green iguana"
        />
        <CardContent>
          <div className="flex justify-between">
            {" "}
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Chip label={`${"$"} ${price}`} color="error" />
          </div>

          <Typography gutterBottom variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Chip
            icon={<StarIcon />}
            label={rating}
            size="small"
            color="warning"
          />
        </CardContent>

        <CardActions>
          <Button size="small" onClick={() => productDetailedViewHandler(id)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
