import { Box, Grid } from "@mui/material";
import ProductCard from "./ProductCard"; // Assuming you already have this component

const ProductCarousel = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        {/* First Product */}
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            product={{
              name: "Eyeglasses 1",
              description: "Stylish and comfortable eyeglasses with a modern design.",
              price: 10000,
              image: "/images/pic1.png", // Replace with your actual image path
            }}
          />
        </Grid>

        {/* Second Product */}
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            product={{
              name: "Sunglasses 1",
              description: "Protect your eyes in style with these premium sunglasses.",
              price: 12000,
              image: "/images/pic2.png", // Replace with your actual image path
            }}
          />
        </Grid>

        {/* Third Product */}
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            product={{
              name: "Eyeglasses 2",
              description: "Classic eyeglasses with a timeless look and feel.",
              price: 9000,
              image: "/images/pic3.png", // Replace with your actual image path
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCarousel;
