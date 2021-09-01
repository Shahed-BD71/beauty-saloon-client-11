import React from "react";
import Featured from "../../../images/FeaturedService.jpg";

const FeaturedService = () => {
  return (
    <section
      styles={{ color: "#bcebc3" }}
      className="features-service pb-0 pb-md-5 my-5"
    >
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid rounded" src={Featured} alt=""></img>
          </div>
          <div className="col-md-7 my-4 align-self-center">
            <h2 className="text-brand fw-bolder">Story Behind Beauty</h2>
            <p className="text-secondary my-3 me-4 pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur culpa voluptate mollitia? Adipisci repudiandae dolor,
              accusantium itaque unde vero. Est fugiat unde odio distinctio non
              autem, facilis aut fuga.
            </p>
            <ul style={{ color: "#3d3d30" }} className="fw-bold">
              <li>Quality Products Ensure</li>
              <li>Quick Customer Services</li>
              <li>Quality Services Ensure</li>
              <li>Professional Team</li>
              <button className="btn btn-brand w-50 mt-3">Learn More</button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedService;
