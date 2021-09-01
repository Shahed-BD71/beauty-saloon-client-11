import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Picture1 from "../../../images/pic1.jpg";
import Picture2 from "../../../images/pic2.jpg";
import Picture3 from "../../../images/pic3.jpg";
import Picture4 from "../../../images/pic4.jpg";
import Picture5 from "../../../images/pic5.jpg";
import Picture6 from "../../../images/pic6.jpg";

const servicesData = [
  {
    name: "Hydrotherapy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    img: Picture1,
    price: 13.0,
  },
  {
    name: "Spa Manicures",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    img: Picture2,
    price: 18.0,
  },
  {
    name: "Sugar Scrubs",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    img: Picture3,
    price: 13.0,
  },
  {
    name: "Cellulite Removal",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    img: Picture4,
    price: 23.0,
  },
  {
    name: "Body Wraps",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    img: Picture5,
    price: 33.0,
  },
  {
    name: "Facial Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    img: Picture6,
    price: 28.0,
  },
];

const Services = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="text-center">
        <h5 style={{ color: "black", fontWeight: "1000" }}>OUR SERVICES</h5>
        <h2 style={{ color: "#d130c1", fontWeight: "700" }}>
          Services We Provide
        </h2>
      </div>
      <div className="d-flex mt-5">
        <div className="row mx-2 justify-content-center">
          {servicesData.map((service) => (
            <ServiceDetails
              service={service}
              key={service.name}
            ></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
