import React from "react";
import PopUpModal from "@/styles/PopUpModal.module.css";
import { RiHospitalLine } from "react-icons/ri";

function Book() {
  return (
    <>
      <div className={PopUpModal.AppointmentDetails}>
        <h1>Appointment Details</h1>
        <div className={PopUpModal.drDetails}>
          <img src="/DrOwen.png" alt="" />
          <div className={PopUpModal.drDetailsText}>
            <h2>Dr. Paul Eneche</h2>
            <h3>Dentist</h3>
            <p>
              <RiHospitalLine style={{ color: "black", marginRight: "5px" }} />{" "}
              Elina Hospital
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
