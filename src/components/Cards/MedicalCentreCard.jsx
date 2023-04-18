import React from "react";
import Image from "next/image";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";

const MedicalCentreCard = ({ details }) => {
  // if (!details) {
  //   return "No data Found";
  // }

  // const { image, hospital, location, distance, specialists } = details;
  const {name, vicinity} = details
  return (
    <div
      style={{
        width: "250px",
        height: "240px",
        backgroundColor: "white",
        borderRadius: "10px 10px",
        overflow: "hidden",
        fontSize: "0.9rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "black",
          color: "white",
          padding: "5px 10px",
          borderRadius: "50px",
          fontSize: "0.7rem",
        }}
      >
        {/* {specialists} Specialists Available */}
        {'11'} Specialists Available
      </div>
      <div
        style={{
          backgroundImage: `url(${'/signInImage.webp'})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "150px",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "15px 20px",
        }}
      >
        <div style={{ fontSize: "0.7rem", maxWidth: "60%" }}>
          <h1 style={{ fontSize: "0.8rem", marginBottom: "5px" }}>
            {name.substring(0,30)}
          </h1>
          <span>{vicinity.substring(0,60)}</span>
        </div>

        <div style={{ fontSize: "0.7rem" }}>
          <IoLocationSharp />
          {/* <span>{distance}</span> */}
          <span>{'5.3km'}</span>
        </div>
      </div>
    </div>
  );
};

export default MedicalCentreCard;
