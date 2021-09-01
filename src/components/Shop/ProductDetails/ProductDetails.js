import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({pd, addProduct}) => {

  return (
    <div>
      <img
        className="pd-img img-fluid rounded"
        src={`data:image/png;base64,${pd.image.img}`}
        alt={pd.name}
      ></img>
      <h3 className="py-3">{pd.name}</h3>
      <small className="me-5">{pd.description}</small>
      <div className="my-2">
        <span className="fw-bolder">Price: ${(pd.price)}</span>
        <br></br>
        <button
          onClick={() => addProduct(pd)}
          className="btn btn-primary w-50 mt-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;