import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Shipment.css";
import { useContext } from "react";
import { CartContext, UserContext } from "../../../App";
import { getDatabaseCart, processOrder } from "../../../utilities/databaseManager";
import ProcessPayment from "./ProcessPayment/ProcessPayment";
const user = JSON.parse(localStorage.getItem('user'));

const Shipment = () => {
  const { register, handleSubmit} = useForm();
  const errors = {
    name: '',
    email: '',
    address: " ",
    phone: " "
};

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [cartItems,setCartItems] = useContext(CartContext);
  console.log(cartItems)
  const [shippingData, setShippingData] = useState(null);

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...user,
      products: cartItems,
      shipment: shippingData,
      paymentId,
      orderTime: new Date(),
    };

    console.log(orderDetails)

    fetch(`https://beauty-saloon.herokuapp.com/addOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data) {
          alert("Successfully Order Done..");
        }else {
          alert("Something Went Wrong, Try again");
        }
      });
  };

  const onSubmit = (data) => {
    setShippingData(data);
  };


  return (
    <div className="row">
      <div
        style={{ display: shippingData ? "none" : "block" }}
        className="col-md-6 m-3"
      >
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">Name is required</span>}

          <input
            type="email"
            email="email"
            defaultValue={user.email}
            {...register("email", { required: true })}
            placeholder="Your Email"
          />
          {errors.email && <span className="error">Email is required</span>}

          <input
            type="text"
            address="address"
            {...register("address", { required: true })}
            placeholder="Your Address"
          />
          {errors.address && <span className="error">Address is required</span>}

          <input
            className="no-arrow"
            type="number"
            pattern="[+]{1}[0-9]{11,14}"
            phone="phone"
            {...register("phone", { required: true })}
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <span className="error">Phone Number is required</span>
          )}
          <input className="btn-brand" type="submit" />
        </form>
      </div>
      <div
        style={{ display: shippingData ? "block" : "none" }}
        className="col-md-4 m-5 p-5 payment-area rounded"
      >
        <h4>Payment Area:</h4>
        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
        <br></br>
      </div>
    </div>
  );
};

export default Shipment;
