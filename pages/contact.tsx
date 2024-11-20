import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  Container,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your inquiry has been submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <Head>
        <title>Contact Us - Matsukura Eyewear</title>
        <meta
          name="description"
          content="Contact Matsukura Eyewear for inquiries about our glasses and services"
        />
      </Head>

      <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="left"
          sx={{ color: "#000000" }} // Fixed typo in color value
        >
          Contact Matsukura Eyewear
        </Typography>

        {/* Contact Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ backgroundColor: "#283618", padding: 3, borderRadius: 2 }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
            We'd Love to Hear from You!
          </Typography>

          <TextField
            label="Your Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            sx={{
              marginBottom: 2,
              "& .MuiInputLabel-root": { color: "#fefae0" }, // Label color
              "& .MuiInputBase-root": { color: "#fefae0" }, // Input text color
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0", // Border color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0", // Hover border color
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0", // Focus border color
              },
            }}
          />
          <TextField
            label="Your Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{
              marginBottom: 2,
              "& .MuiInputLabel-root": { color: "#fefae0" },
              "& .MuiInputBase-root": { color: "#fefae0" },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0",
              },
            }}
          />
          <TextField
            label="Your Inquiry"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            sx={{
              marginBottom: 2,
              "& .MuiInputLabel-root": { color: "#fefae0" },
              "& .MuiInputBase-root": { color: "#fefae0" },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fefae0",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#606c38",
              color: "#fff",
              "&:hover": { backgroundColor: "#a3b18a" },
            }}
          >
            Submit Inquiry
          </Button>
        </Box>

        {/* Divider */}
        <Divider sx={{ marginY: 4, backgroundColor: "#3498db" }} />

        {/* Store Information Section */}
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          sx={{ color: "#000000" }} // Fixed typo in color value
        >
          Our Store Locations
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ padding: 2, backgroundColor: "#fefae0", borderRadius: 1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#283618" }}>
                矢田店 (Yata Store)
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                Address: 大阪市東住吉区矢田6-3-3（建物１F）
                <br />
                Phone: 06-6608-3168
                <br />
                Regular Hours: 10:00 AM - 6:00 PM
                <br />
                Closed: December 31 – January 3
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{ padding: 2, backgroundColor: "#fefae0", borderRadius: 1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#283618" }}>
                Main Store - 新大阪時計眼鏡店 (Shin-Osaka Store)
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                Address: 大阪市淀川区西三国1-13-7
                <br />
                Phone: 06-6393-0836
                <br />
                Regular Hours: 10:00 AM - 6:30 PM
                <br />
                Closed: December 31 (afternoon) – January 3
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{ padding: 2, backgroundColor: "#fefae0", borderRadius: 1 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#283618" }}>
                楽天ショップ (Rakuten Shop)
              </Typography>
              <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                Website:{" "}
                <a
                  href="https://www.rakuten.ne.jp/gold/glass-m-shop/"
                  target="_blank"
                  style={{ color: "#606c38" }}
                >
                  Visit our Rakuten Shop
                </a>
                <br />
                Phone: 06-6654-3142
                <br />
                Regular Hours: 10:00 AM - 6:00 PM
                <br />
                Closed: Every Sunday, Holidays, December 31 – January 4
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
