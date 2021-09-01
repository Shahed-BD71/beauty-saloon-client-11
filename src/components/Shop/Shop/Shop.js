import React, {useState} from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { useContext } from "react";
import { CartContext } from "../../../App";

const Shop = () => {
  const [cartItems,setCartItems] = useContext(CartContext);
  const addProduct = (pd) => {
    const hasProduct = cartItems.find(x => x._id === pd._id);
    if (hasProduct) {
      setCartItems(
        cartItems.map((x) =>
          x._id === pd._id ? { ...hasProduct, qty: hasProduct.qty + 1 } : x
        )
      );
    }else {
      setCartItems([...cartItems, {...pd, qty: 1}]);
    }
  };
  
  const removeProduct = (pd) => {
    const hasProduct = cartItems.find((x) => x._id === pd._id);
    if (hasProduct.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !==pd._id));
    }else{
      setCartItems(
        cartItems.map((x) =>
          x._id === pd._id ? { ...hasProduct, qty: hasProduct.qty - 1 } : x
        )
      );
    }
  }

  // fetch(`https://beauty-saloon.herokuapp.com/cartItems`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: cartItems
  // })

  return (
    <main className="">
      <Navbar countCartItems={cartItems.length}></Navbar>
      <div className="row my-5 mx-2 justify-content-between d-flex">
        <Product addProduct={addProduct}></Product>
        <Cart
          cartItems={cartItems}
          addProduct={addProduct}
          removeProduct={removeProduct}
        ></Cart>
      </div>
      <Footer />
    </main>
  );
};

export default Shop;
