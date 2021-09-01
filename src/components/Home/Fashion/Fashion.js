import React from 'react';
import FashionGallery from '../FashionGallery/FashionGallery';
import fashion1 from "../../../images/fashion1.jpg"
import fashion2 from "../../../images/fashion2.jpg"
import fashion3 from "../../../images/fashion3.jpg"
import fashion4 from "../../../images/fashion4.jpg"
import fashion5 from "../../../images/fashion5.jpg"
import fashion6 from "../../../images/fashion6.jpg"

const fashionData = [
  {
    img: fashion1,
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, blanditiis?",
  },
  {
    img: fashion2,
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, blanditiis?",
  },
  {
    img: fashion3,
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, blanditiis?",
  },
  {
    img: fashion4,
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, blanditiis?",
  },
  {
    img: fashion5,
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, blanditiis?",
  },
  {
    img: fashion6,
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, blanditiis?",
  },
];

const Fashion = () => {
  return (
    <section className="">
      <div className="text-center mx-2">
        <h1 style={{ color: "black", fontWeight: "700" }}>
          Fashion Inspirations
        </h1>
        <hr style={{border: "1px dashed #000",width: "45%", marginLeft: "29%", marginTop: "1%",  marginBottom: "1%" }}></hr>
        <span style={{ color: "#3A4256" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore.
        </span>
      </div>
      <div className="d-flex mt-3 mx-4 row justify-content-center">
        {fashionData.map((fashion) => (
          <FashionGallery fashion={fashion}></FashionGallery>
        ))}
      </div>
    </section>
  );
};

export default Fashion;


