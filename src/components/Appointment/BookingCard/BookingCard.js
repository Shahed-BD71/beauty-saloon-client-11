import React from "react";
import BookingAppointment from "../BookingAppointment/BookingAppointment";

const BookingCard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3 mt-5 shadow-sm rounded">
        <div class="card-body text-center">
          <h5 class="card-title mb-3 text-brand">{booking.title}</h5>
          <h6 className="mb-2">{booking.visitingHour}</h6>
          <small class="card-text">{booking.space} SPACES AVAILABLE</small>
          <br></br>
          <button onClick={openModal} class="mt-3 btn btn-brand">
            Book Appointment
          </button>
          <BookingAppointment
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            appointmentOn={booking.title}
            date={date}
            time={booking.visitingHour}
          ></BookingAppointment>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
