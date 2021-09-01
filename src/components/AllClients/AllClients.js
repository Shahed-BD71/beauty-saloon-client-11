import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AllClients = () => {
  const [appointments, setAppointments] = useState([]);
  console.log(appointments)

  useEffect(() => {
    fetch("https://beauty-saloon.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="container-fluid row ">
      <div className="col-md-2 col-2 me-5">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-9 col-10"
        style={{
          position: "relative",
          right: "12px",
          backgroundColor: "#F4FDFB",
        }}
      >
        <h5 className="text-brand">All Patients</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllClients;
