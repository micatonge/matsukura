import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import ProductCarousel from "../components/ProductCarousel";
import PromoBanner from "../components/PromoBanner";
import StoreLocations from "../components/StoreLocations";
import Navbar from "../components/NavBar"; // Import Navbar component

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matsukura Eyewear</title>
        <meta
          name="description"
          content="Affordable, Fast, and Easy to Understand Eyewear Solutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="banner-image-container">
        <Image
          src="/images/hero-image.jpg"
          alt="Matsukura Eyewear Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="overlay">
          <div className="banner-content">
            <h1 className="banner-title">Welcome to Matsukura Eyewear</h1>
            <p className="banner-subtitle">
              Affordable, Fast, and Easy to Understand Eyewear Solutions
            </p>
            <Link href="/Products" className="shop-button">
              Shop Now
            </Link>
          </div>
        </div>
      </section>


      <PromoBanner />

      <section className="py-16">
        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-3xl font-bold mb-8 eye sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Browse Eyewear
          </h2>
          <ProductCarousel />
        </Box>
      </section>

      <section className="find-store-section">
        <div className="container mx-auto px-4 py-16">
          <div className="find-store-content">
            <h2 className="text-white text-3xl font-bold mb-4">Find Store</h2>
            <Link
              href="/locations"
              className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
            >
              View Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
