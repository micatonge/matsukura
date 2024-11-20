import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard"; // Use a relative path
 // Assuming you already have this component

const sunglasses = () => {
  return (
    <>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h2 className="text-3xl font-bold mb-8 eye sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      Browse Sunglasses
    </h2>
    <Box
      sx={{
        display: "flex",             // Use flexbox layout
        justifyContent: "center",    // Center horizontally
        padding: 2                   // Optional: Add some padding around the carousel
      }}
    >  
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center", // Center the grid content horizontally
          width: "100%",            // Ensure the grid takes the full width of the container
          maxWidth: "1200px",       // Optional: Set a max-width for larger screens
        }}
      >
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
  </Box>
      </>
  );
};

export default sunglasses;
