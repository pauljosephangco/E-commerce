import React from "react";
import "./ProductCard.css";

function ProductCard({ image, name, price, description }) {
  const handleBuyNow = () => {
    console.log(`BUY NOW CLICKED FOR: ${name}`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <p className="desc">{description}</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default ProductCard;
