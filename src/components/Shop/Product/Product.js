import React from "react";
import { useState, useEffect } from "react";
// import productData from "../fakeData";
import ProductDetails from "../ProductDetails/ProductDetails";

const Product = ({addProduct}) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(`https://beauty-saloon.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="col-md-7 col-7">
      <h3 className="text-center fw-bolder text-brand">
        Try Our Products
      </h3>
      {products.length !== 0 ? (
        products.map((pd) => (
          <ProductDetails
            pd={pd}
            addProduct={addProduct}
            key={pd._id}
          ></ProductDetails>
        ))
      ) : (
        <div style={{ textAlign: "center", border: "none" }}>
          <div class="loadingio-spinner-pulse-pcfqenj96f">
            <div class="ldio-02fa0calvywk">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
