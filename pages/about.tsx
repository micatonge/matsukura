import React from "react";
import Head from "next/head";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>About Us - Matsukura Eyewear</title>
        <meta
          name="description"
          content="Learn more about Matsukura Eyewear and our services"
        />
      </Head>

      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
          marginX: "auto",
          maxWidth: "1200px",
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="left"
          sx={{ color: "#2c3e50" }}
        >
          About Matsukura Eyewear
        </Typography>

        {/* Intro Paragraph */}
        <Typography
          variant="body1"
          paragraph
          align="left"
          sx={{ color: "#34495e", fontSize: "1rem" }}
        >
          Welcome to Matsukura Eyewear, where we provide high-quality eyewear
          solutions tailored to your needs. We are proud to offer a variety of
          eyewear and hearing aid consultations. Our stores carry a range of
          stylish frames and high-end lenses at affordable prices.
        </Typography>

        {/* Divider */}
        <Divider sx={{ marginBottom: 3, backgroundColor: "#283618" }} />

        {/* Services Section */}
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          sx={{ color: "#00000" }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", backgroundColor: "#fefae0" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#283618" }}>
                  Glasses Sets - ¥6600
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                  We offer a special "3-pair set" of glasses starting at just
                  ¥6600. Whether you need driving glasses, desk glasses, or
                  indoor glasses, we have the perfect set for you. Our glasses
                  come with various options, including high-index lenses,
                  sunglasses, and blue-cut lenses.
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                  We also provide custom prescriptions and offer a variety of
                  frames for you to choose from.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", backgroundColor: "#fefae0" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#283618" }}>
                  Hearing Aids Consultation
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                  We have started offering consultations for hearing loss. If
                  you're experiencing difficulty hearing conversations, if the
                  TV is too loud, or if you often mishear things, we are here to
                  help.
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                  We offer hearing tests and consultations regarding hearing
                  aids. All consultations require an appointment. Please get in
                  touch to book your session.
                </Typography>
                <Button
                  variant="contained"
                  href="https://matsukura-megane.co.jp/yata/"
                  target="_blank"
                  fullWidth
                  sx={{
                    backgroundColor: "#283618",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#606c38" },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ marginBottom: 3, backgroundColor: "#3498db" }} />

        {/* Store Information Section */}
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          sx={{ color: "#2c3e50" }}
        >
          Store Information
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", backgroundColor: "#fefae0" }}>
              <CardContent>
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
                <Typography variant="body2" paragraph sx={{ color: "#34495e" }}>
                  We offer a variety of frames, including single-vision glasses
                  starting from ¥6600 for 3 pairs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", backgroundColor: "#fefae0" }}>
              <CardContent>
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
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", backgroundColor: "#fefae0" }}>
              <CardContent>
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
