import React from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <div className="ms-5 px-5">
      <h2 className="text-brand text-center">Appointment List</h2>
      {appointments.length ? (
        <AppointmentShortList
          appointments={appointments}
        ></AppointmentShortList>
      ) : (
        <div className="text-center mt-4 row">
          <h4 className="lead">No Appointments for this Date</h4>
        </div>
      )}
    </div>
  );
};

export default AppointmentByDate;
