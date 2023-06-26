import React from "react";

const styles = {
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "10px",
  borderRadius: "5px",
  fontWeight: "bold",
  color: "rgba(0,0,0,0.5)",
};

export default function Resume() {
  return (
    <div className="container" style={{ display: "inline-block", justifyContent:'center', alignContent:'center', alignItems:'center'}}>
      <div
        className=" col-5 my-4"
        style={{ border: "solid lightgrey", textAlign: "center" }}
      >
        <h3>Front End Proficiency</h3>
        <div>
          <span style={{ ...styles, backgroundColor: "#CAF4F4" }}>React</span>
          <span style={{ ...styles, backgroundColor: "#FFF2CC" }}>
            Handlebars
          </span>
          <span style={{ ...styles, backgroundColor: "#FCFFE9" }}>
            JavaScript
          </span>
        </div>
        <div>
          <span style={{ ...styles, backgroundColor: "#F4BDAE" }}>HTML</span>
          <span style={{ ...styles, backgroundColor: "#5BAEB7" }}>CSS</span>
        </div>
      </div>

      <div
        className=" col-5"
        style={{ border: "solid lightgrey", textAlign: "center" }}
      >
        <h3>Back End Proficiency</h3>
        <div>
          <span style={{ ...styles, backgroundColor: "#FFA466" }}>MySQL</span>
          <span style={{ ...styles, backgroundColor: "#C5D4EB" }}>
            Sequelize
          </span>
          <span style={{ ...styles, backgroundColor: "#B8DEB4" }}>MongoDB</span>
          <span style={{ ...styles, backgroundColor: "#FF6b6b" }}>
            Mongoose
          </span>
        </div>
        <div>
          <span style={{ ...styles, backgroundColor: "#FFB3C6" }}>GraphQL</span>
          <span style={{ ...styles, backgroundColor: "#8BCA84" }}>Node JS</span>
          <span style={{ ...styles, backgroundColor: "#D4AF37" }}>
            Express JS
          </span>
        </div>
      </div>

      <div>
        <button className="btn btn-secondary my-3 mx-auto">
          <a href="https://drive.google.com/file/d/1nExzTIUzinS_mqscelYtVpNfYH-zPVvk/view?usp=sharing" style={{textDecoration:'none', color:'whitesmoke'}}>Click here to view my full Resume</a></button>
      </div>
    </div>
  );
}
