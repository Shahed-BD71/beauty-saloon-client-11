import React from 'react';
import HomeAppointmentDetails from '../HomeAppointmentDetails/HomeAppointmentDetails';
import service1 from "../../../images/service1.jpg"
import service2 from "../../../images/service2.jpg"
import service3 from "../../../images/service3.jpg"
import service4 from "../../../images/service4.jpg"
import service5 from "../../../images/service5.jpg"

const appointmentData = [
  {
    name: "Facial",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy.",
    img: service1,
  },
  {
    name: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy.",
    img: service2,
  },
  {
    name: "Hair Style",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy.",
    img: service3,
  },
  {
    name: "Nail",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy.",
    img: service4,
  },
  {
    name: "Bridal",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy.",
    img: service5,
  },
];

const HomeAppointment = () => {
 return (
   <section className="mt-5 mb-5">
     <div className="text-center">
       <h5 style={{ color: "black", fontWeight: "1000" }}>GET APPOINTMENT</h5>
       <h2 style={{ color: "#20d49e", fontWeight: "700" }}>
         Upgrade Your Look
       </h2>
     </div>
     <div className="mt-4">
       <div className="row d-flex justify-content-center">
         {appointmentData.map((appointment) => (
           <HomeAppointmentDetails
             appointment={appointment}
           ></HomeAppointmentDetails>
         ))}
       </div>
     </div>
   </section>
 );
};

export default HomeAppointment;