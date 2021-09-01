import React from 'react';
import HeaderImg from '../../../images/image2.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
      <main
        style={{ height: "600px"}}
        className="row d-flex px-3 align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{ color: "#7ef5b5" }} className="fw-bolder">
            Your New Look <br />
            Starts Here
          </h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            pariatur at est vero nihil odio dolorum illum dolor soluta sequi!
          </p>
          <button className="btn btn-brand w-50">Book Now</button>
        </div>
        <div className="col-md-6">
          <img src={HeaderImg} className="img-fluid rounded" alt="" />
        </div>
      </main>
    );
};

export default HeaderMain;