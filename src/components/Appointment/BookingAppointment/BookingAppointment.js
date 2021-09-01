import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./BookingAppointment.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "sans-serif",
    width: "500px",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");

const BookingAppointment = ({modalIsOpen,closeModal,appointmentOn,date,time}) => {
  console.log(time);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    data.date = date;
    data.service = appointmentOn;
    data.created = new Date();
    data.time = time;

    fetch(`https://beauty-saloon.herokuapp.com/addAppointment`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (!success) {
          alert("Congress!! Appointment Created Successfully");
          closeModal();
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{appointmentOn}</h2>
        <p className="text-secondary text-center">
          <small>ON {date.toDateString()}</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <h6 className="form-control text-center fw-bold">Time: {time}</h6>
            <input
              name="name"
              placeholder="Your Name"
              className="form-control"
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: "^.* .*$",
              })}
            />
          </div>
          <div className="from-group row">
            <div className="col-4 mt-2">
              <select
                name="gender"
                type="select"
                className="form-control"
                {...register("gender", { required: true })}
              >
                <option disabled={true} defaultValue="Not set">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Not set">Other</option>
              </select>
            </div>
            <div className="from-group col-4 mt-2">
              <input
                type="number"
                name="age"
                placeholder="Your Age"
                className="form-control"
                {...register("age", { required: true })}
              ></input>
            </div>
            <div className="from-group col-4 mt-2">
              <input
                type="number"
                name="weight"
                placeholder="Weight"
                className="form-control"
                {...register("weight", { required: true })}
              ></input>
            </div>
          </div>
          <div className="form-group mt-2">
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="form-control"
              {...register("phone", {
                required: true,
                maxLength: 11,
                pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
              })}
            ></input>
          </div>
          <div className="form-group mt-2">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
              {...register("email", { required: true })}
            ></input>
          </div>
          <div className="form-group mt-2">
            <input
              name="birthday"
              type="date"
              className="form-control"
              {...register("birthday", { required: true })}
            ></input>
          </div>
          <div className="form-group mt-2 text-end">
            <button type="submit" className="btn btn-brand">
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookingAppointment;
