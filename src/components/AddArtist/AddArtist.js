import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddArtist = () => {
  const [info, setInfo] = useState({});
  console.log(info);
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);
    formData.append("position", info.position);
    formData.append("facebook", info.facebook);
    formData.append("linkedin", info.linkedin);
    formData.append("instagram", info.instagram);
    formData.append("phone", info.phone);

    fetch(`https://beauty-saloon.herokuapp.com/addArtist`, {
      method: "POST",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section style={{Right: "0px"}} className="container-fluid row">
      <div style={{ marginLeft: "-23px" }} className="col-md-2 me-5 col-2">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-4 p-4 col-9"
        style={{
          marginTop: "10px",
          marginLeft: "145px",
          backgroundColor: "#F4FDFB",
        }}
      >
        <div className="justify-content-center">
          <h5 className="text-brand">Add an Artist Or Beautician</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                required
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Position</label>
              <input
                onBlur={handleBlur}
                type="text"
                required
                className="form-control"
                name="position"
                placeholder="Position Title"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Facebook</label>
              <input
                onBlur={handleBlur}
                type="url"
                className="form-control"
                name="facebook"
                placeholder="https://www.facebook.com/SAShahedBD71/"
                pattern="https://.*"
              />
            </div>
            <div className="form-group">
              <label>Linkedin</label>
              <input
                onBlur={handleBlur}
                type="url"
                className="form-control"
                name="linkedin"
                placeholder="https://www.linkedin.com/in/mohammad-shahed/"
                pattern="https://.*"
              />
            </div>
            <div className="form-group">
              <label>Instagram</label>
              <input
                onBlur={handleBlur}
                type="url"
                className="form-control"
                name="instagram"
                pattern="https://.*"
                placeholder="https://www.instagram.com/cristiano/"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                onBlur={handleBlur}
                type="number"
                className="form-control"
                name="phone"
                pattern="[+]{1}[0-9]{11,14}"
                required
                placeholder="01811112233"
              />
            </div>
            <div className="form-group">
              <label>Upload a image</label>
              <input
                onChange={handleFileUpload}
                type="file"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-lg mt-2 btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddArtist;
