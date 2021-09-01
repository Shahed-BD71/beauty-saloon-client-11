import React from 'react';
import './FashionGallery.css'

const FashionGallery = ({fashion}) => {
  return (
    <div className="col-md-4">
      <div className="content my-2">
        <div className="content-overlay"></div>
        <img className="content-image" src={fashion.img} alt="" />
        <div className="content-details fadeIn-bottom">
          <h4 className="content-title">View Details</h4>
        </div>
      </div>
    </div>
  );
};

export default FashionGallery;