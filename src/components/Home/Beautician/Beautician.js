import React from 'react';
import { useState, useEffect } from "react";
import BeauticianDetails from '../BeauticianDetails/BeauticianDetails';
// import Team1 from "../../../images/team1.jpg"
// import Team2 from "../../../images/team2.jpg"
// import Team3 from "../../../images/team3.jpg"
// import Team4 from "../../../images/team4.jpg"


// const beauticianData = [
//   {
//     name: "Teddy Clydie",
//     position: "Hair Stylist",
//     img: Team1,
//     fb: "",
//     email: "",
//     linkedin: "",
//     instagram: "",
//   },
//   {
//     name: "Brandi Boyd",
//     position: "Therapist",
//     img: Team2,
//     fb: "",
//     email: "",
//     linkedin: "",
//     instagram: "",
//   },
//   {
//     name: "Nessa Muntaha",
//     position: "Makeover",
//     img: Team3,
//     fb: "",
//     email: "",
//     linkedin: "",
//     instagram: "",
//   },
//   {
//     name: "Ftz Pushpita",
//     position: "Makeup Artist",
//     img: Team4,
//     fb: "",
//     email: "",
//     linkedin: "",
//     instagram: "",
//   },
// ];

const Beautician = () => {
  const [artists, setArtists] = useState([]);
  console.log(artists);

  useEffect(() => {
    fetch(`https://beauty-saloon.herokuapp.com/artists`)
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  return (
    <section className="mt-5 m-3 py-5">
      <div className="text-center">
        <h1 style={{ color: "#b236d1", fontWeight: "700" }}>
          Expert Beautician
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row mx-3 py-4">
          {artists.length !== 0 ? (
            artists.map((artist) => (
              <BeauticianDetails artist={artist}></BeauticianDetails>
            ))
            ) : (
            <div class="loadingio-spinner-dual-ring-qlmdv3qjtx">
              <div class="ldio-zeqa7nuzur">
                <div></div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Beautician;