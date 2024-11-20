import React from "react";
import Head from "next/head";
import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>About Matsukura Eyewear</title>
        <meta
          name="description"
          content="Learn more about Matsukura Eyewear, our products, and our mission."
        />
      </Head>

      <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
        {/* About Section */}
        <Typography variant="h3" component="h1" gutterBottom align="left">
          About Matsukura Eyewear
        </Typography>
        <Box sx={{ backgroundColor: "#fefae0", padding: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1" paragraph>
            Matsukura Eyewear offers premium eyewear solutions with a focus on
            design, comfort, and affordability. We are dedicated to providing
            stylish and high-quality glasses to our customers.
          </Typography>
          <Typography variant="body1" paragraph>
            Our products are crafted with attention to detail, ensuring that each
            pair is not only fashionable but also durable. Whether you're looking
            for prescription glasses, sunglasses, or specialized eyewear, we have
            something for every occasion.
          </Typography>
          <Typography variant="body1" paragraph>
            At Matsukura Eyewear, we are committed to helping you see the world
            more clearly with style. We invite you to visit one of our stores or
            shop online to find your perfect pair of glasses.
          </Typography>
          <Typography variant="body1" paragraph>
            Our goal is to make your eyewear experience exceptional from start to
            finish. We prioritize customer satisfaction and offer personalized
            consultations to help you choose the best glasses for your needs.
          </Typography>
        </Box>

        {/* Services Section */}
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#00000', paddingTop: 5}}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', backgroundColor: '#fefae0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: '#283618' }}>
                  Glasses Sets - ¥6600
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#34495e' }}>
                  We offer a special "3-pair set" of glasses starting at just ¥6600. Whether you need driving glasses,
                  desk glasses, or indoor glasses, we have the perfect set for you. Our glasses come with various options,
                  including high-index lenses, sunglasses, and blue-cut lenses.
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#34495e' }}>
                  We also provide custom prescriptions and offer a variety of frames for you to choose from.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', backgroundColor: '#fefae0' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: '#283618' }}>
                  Hearing Aids Consultation
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#34495e' }}>
                  We have started offering consultations for hearing loss. If you're experiencing difficulty hearing conversations,
                  if the TV is too loud, or if you often mishear things, we are here to help.
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: '#34495e' }}>
                  We offer hearing tests and consultations regarding hearing aids. All consultations require an appointment. Please get in touch to book your session.
                </Typography>
                <Button variant="contained" href="https://matsukura-megane.co.jp/yata/" target="_blank" fullWidth sx={{ backgroundColor: '#606c38', color: '#fff', '&:hover': { backgroundColor: '#a3b18a' } }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
