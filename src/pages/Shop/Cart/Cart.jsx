import React, { useContext } from "react";
import { PRODUCTS } from "../../../Products";
import { CartItem } from "./cart-item";
import { ShopContext } from "../../../context/shop-context";
import "./cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItem">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id ] !== 0) {
            return <CartItem key={product.id} data={product} />;
          } else {
            return null;
          }
        })}
      </div>
      <div>
      <div className="order-button">
        <Link to="/order">
          <button style={{color:"red"}}><b>Proceed to Order</b></button>
        </Link>
      </div>
      </div>
    </div>
  );
};
