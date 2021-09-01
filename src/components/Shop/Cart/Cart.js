import React, { useState, useEffect} from "react";
import {
  getDatabaseCart,
} from "../../../utilities/databaseManager.js";
import "./Cart.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItems, addProduct, removeProduct }) => {
  console.log(cartItems);
  const history = useHistory();

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.15;
  const shippingPrice = itemsPrice > 2000 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const handleProceedCheckout = () => {
    history.push("/shipment");
  };


  return (
    <aside className="col-md-4 sticky-top col-5 rounded">
      <h5 className="text-center fw-bold text-brand">Your Shopping Details</h5>
      <h5 className="text-center">
        {cartItems.length === 0 && <p>Cart is Empty</p>}
      </h5>
      <div className="bg-light rounded">
        {cartItems.map((item) => (
          <div className="row p-2">
            <hr></hr>
            <div className="col-md-7">{item.name}</div>
            <div
              style={{
                backgroundColor: "#c9f0c2",
                width: "8rem",
                height: "3rem",
              }}
              className="text-center justify-content-center rounded"
            >
              <button
                className="m-2"
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#e62031",
                }}
                onClick={() => removeProduct(item)}
              >
                <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
              </button>
              <button
                className="m-1"
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#59e028",
                }}
                onClick={() => addProduct(item)}
              >
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
              </button>
            </div>
            <div className="fw-bold mt-1">
              {item.qty} * ${item.price}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div className="fw-bold">
            <hr></hr>
            <div className="row">
              <div className="col-md-8">Items Price:</div>
              <div className="col-md-4">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-md-8">Tax Price:</div>
              <div className="col-md-4">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-md-8">Shipping Cost:</div>
              <div className="col-md-4">${shippingPrice.toFixed(2)}</div>
            </div>
            <hr></hr>
            <div className="row fw-bolder">
              <div className="col-md-8">Total Price:</div>
              <div className="col-md-4">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="row ms-2 me-2 mt-3">
              <button
                className="btn fw-bold btn-warning"
                onClick={handleProceedCheckout}
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Cart;
