import React, { useState } from "react";
import ProductCard from "./component/ProductCard";
import SearchBar from "./component/SearchBar";
import "./global.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      image: "images.jpg",
      name: "SAMSUNG TABLET",
      price: 245,
      description: "Latest tablet with stunning display."
    },
    {
      image: "smartwatch.jpg",
      name: "SMART WATCH",
      price: 655,
      description: "Smartwatch with health tracking."
    },
    {
      image: "headset.jpg",
      name: "HEADPHONE",
      price: 896,
      description: "Noise-cancelling headphones."
    },
    {
      image: "camera.jpeg",
      name: "CAMERA",
      price: 786,
      description: "Professional camera for creators."
    },
    {
      image: "powerbank.jpg",
      name: "POWER BANK",
      price: 999,
      description: "Fast charging power bank."
    },
    {
      image: "speaker.jpg",
      name: "SPEAKER",
      price: 833,
      description: "Lightweight portable speaker."
    }
  ];


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-wrapper">
      {}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="app-container">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={`₱${product.price.toLocaleString()}`} 
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
