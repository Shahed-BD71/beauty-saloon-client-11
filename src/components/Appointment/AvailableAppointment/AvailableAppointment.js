import React from "react";
import BookingCard from "../BookingCard/BookingCard";
const bookingData = [
  {
    id: 1,
    title: "Hydrotherapy",
    visitingHour: "8:00 AM - 9:00 AM",
    space: 17,
  },
  {
    id: 2,
    title: "Spa Manicures",
    visitingHour: "10:05 AM – 11:30 AM",
    space: 18,
  },
  {
    id: 3,
    title: "Sugar Scrubs",
    visitingHour: "5:00 AM – 6:30 PM",
    space: 11,
  },
  {
    id: 4,
    title: "Facial Treatment",
    visitingHour: "7:00 PM – 8:30 PM",
    space: 14,
  },
  {
    id: 5,
    title: "Body Wraps",
    visitingHour: "9:00 PM - 10:00 PM",
    space: 10,
  },
  {
    id: 6,
    title: "Cellulite Removal",
    visitingHour: "10:30 PM - 11:30 PM",
    space: 12,
  },
];

const AvailableAppointment = ({ date, visitingHour }) => {
  return (
    <section className="m-5 py-5">
      <h2 className="text-center text-brand">
        Available Appointments on {date.toDateString()}{" "}
      </h2>
      <div className="row">
        {bookingData.map((booking) => (
          <BookingCard
            booking={booking}
            date={date}
            key={booking.id}
          ></BookingCard>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
