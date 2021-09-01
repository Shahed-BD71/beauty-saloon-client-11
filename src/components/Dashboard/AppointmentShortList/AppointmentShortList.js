import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <table className="table me-5 table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Phone
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
          <th className="text-secondary" scope="col">
            Time
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td>{appointment.name}</td>
            <td>{appointment.phone}</td>
            <td>{appointment.email}</td>
            <td>
              <small>{appointment.time}</small>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentShortList;
