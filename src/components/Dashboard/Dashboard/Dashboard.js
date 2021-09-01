import React, { useState, useEffect, useContext } from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";
import './Dashboard.css'


const containerStyle = {
  background: "#F4FDFB",
  height: "100%",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch(`https://beauty-saloon.herokuapp.com/appointmentsByDate`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);
  
  return (
    <section className="">
      <div style={containerStyle} className="container-fluid row">
        <div style={{ marginLeft: "-23px"}} className="col-md-2 me-5 col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-3 ms-5 col-8 mb-view mt-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div style={{width: "fit-content"}} className="col-md-5 ms-5 text-center col-10 mb-view view-2 mt-5">
          <AppointmentByDate appointments={appointments}></AppointmentByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
