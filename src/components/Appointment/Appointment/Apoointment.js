import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <AvailableAppointment date={selectedDate}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
