import React from 'react';
import './HomeAppointmentDetails.css'
import {Link} from "react-router-dom";

const HomeAppointmentDetails = ({appointment}) => {
  return (
    <div className="home-app card-group col-10 col-md-2">
      <div className="card">
        <div className="card-img-wrapper">
          <img className="img-fluid" src={appointment.img} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{appointment.name}</h5>
          <div className="card-content">
            <p className="card-text">{appointment.description}</p>
            <Link to="/appointment" className="btn btn-brand">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointmentDetails;