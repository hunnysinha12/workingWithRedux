import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((products) => (
          <div key={products.id} className="cartCard">
            <img src={products.image} alt="" />
            <h5>{products.title}</h5>
            <h5>{products.price}</h5>
            <button onClick={() => handleRemove(products.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
