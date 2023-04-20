import React from "react";
import PopUpModal from "@/styles/PopUpModal.module.css";
import { RiCalendarCheckLine } from "react-icons/ri";

function SucessModal({ setShowModal }) {
  return (
    <>
      <div className={PopUpModal.sucessContainer}>
        <div className={PopUpModal.sucessBox}>
          <RiCalendarCheckLine style={{ fontSize: "80px" }} />
        </div>
        <h1>Success!</h1>
        <p>Your Appointment has been successfully booked</p>
        <button className={PopUpModal.successButtons}>
          Download Appointment Details
        </button>
        <button
          className={PopUpModal.successButtons}
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default SucessModal;
