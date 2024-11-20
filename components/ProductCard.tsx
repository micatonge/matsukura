import { useRouter } from "next/router";  // Import useRouter hook from Next.js
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const router = useRouter();  // Initialize the router

  const handleInquireClick = () => {
    router.push("/contact");  // Navigate to the /contact page
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif" }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph sx={{ fontFamily: "'Open Sans', sans-serif" }}>
          {product.description}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Open Sans', sans-serif" }}>
          ¥{product.price}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#283618", // Brown button color (like the location section)
            color: "#ffffff", // White text
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif", // Ensure the Open Sans font is used
            padding: "10px 30px", // Matching padding to your location section button
            borderRadius: "25px", // Round edges
            "&:hover": {
              backgroundColor: "#a3b18a", // Light grey on hover
            },
          }}
          fullWidth
          onClick={handleInquireClick}  // Add the click handler
        >
          Inquire
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
