import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, removeFromCart } from "../app/store";

const Cart = () => {
  const { cart } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    console.log("Cart data changed:", cart);
  }, [cart, dispatch]);

  return (
    <div>
      {cart.map((item) => (
        <div data-testid="product" key={item.id}>
          <img data-testid="product-image" src={item.img} alt="404 Error" />
          <h3 data-testid="product-brand">{item.brand}</h3>
          <h4 data-testid="product-price">Price:-{item.price} </h4>
          <p data-testid="product-category">Category:-{item.category} </p>
          <p data-testid="product-details">{item.details}</p>

          <button onClick={() => item.id && handleRemoveFromCart(item.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
