import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";

const InfoCard = (props) => {
  const { title, description, background, icon } = props.info;
  return (
    <div className="col-md-3 mx-3 my-2 col-10 text-white info-card">
      <div
        className={`d-flex rounded justify-content-center info-container info-${background}`}
      >
        <div className="me-3">
          <FontAwesomeIcon className="info-icon" icon={icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6>{title}</h6>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
