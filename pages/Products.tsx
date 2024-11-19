import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import ProductFilter from "../components/ProductFilter";

const products = [
  {
    id: 1,
    name: "Classic Frame",
    price: 5500,
    imageUrl: "/images/classic-frame.jpg",
    category: "classic",
  },
  {
    id: 2,
    name: "Modern Frame",
    price: 6600,
    imageUrl: "/images/modern-frame.jpg",
    category: "modern",
  },
  // Add more products
];

const Products: NextPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category: string) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category,
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Products - Matsukura Eyewear</title>
        <meta name="description" content="Browse our eyewear collection" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>

        <div className="mb-8 flex space-x-4">
          <div className="w-2/3">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="w-1/3">
            <ProductFilter onFilterChange={handleFilter} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
