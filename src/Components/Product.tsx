import React from "react";
import { products } from "../Pages/Home";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/store";

function Product({ id, brand, img, price, category, details }: products) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = { id, brand, img, price, category, details };
    dispatch(addToCart(productToAdd));
  };
  return (
    <div data-testid="product">
      <img data-testid="product-image" src={img} alt="404 Error" />
      <h3 data-testid="product-brand">{brand}</h3>
      <h4 data-testid="product-price">Price:-{price} </h4>
      <p data-testid="product-category">Category:-{category} </p>
      <p data-testid="product-details">{details}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default Product;
