import React from "react";
import Picture from "../../../images/appPic3.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentHeader.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex bg-image mt-5 justify-content-center"
    >
      <div className="col-md-4 col-10">
        <h5 className="pb-3" style={{ color: "#3A4256" }}>
          Select Your Appointment Date
        </h5>
        <Calendar
          className="mb-4"
          onChange={handleDateChange}
          value={new Date()}
        />
      </div>
      <div className="col-md-6 col-10 mb-5">
        <img src={Picture} className="img-fluid" alt="" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
