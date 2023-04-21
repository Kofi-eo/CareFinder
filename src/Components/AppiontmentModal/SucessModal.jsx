import React from "react";
import PopUpModal from "@/styles/PopUpModal.module.css";
import { RiCalendarCheckLine } from "react-icons/ri";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function SucessModal({ setShowModal, formDetails }) {
  
  function handleDocument() {

    const doc = new jsPDF();

    const formData = document.getElementById('formData')

    setTimeout(() => {
      // Convert the HTML element to canvas
      html2canvas(formData).then((canvas) => {
        // Add the canvas to the PDF document
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10, 180, 180);
  
        // Save and download the PDF document
        doc.save("form-data.pdf");
      });
    })
  }

  const {firstName, lastName, sex, appointmentType, meetingDate, meetingTime} = formDetails

  return (
    <>
      <div className={PopUpModal.sucessContainer}>
        <div className={PopUpModal.sucessBox}>
          <RiCalendarCheckLine style={{ fontSize: "80px" }} />
        </div>
        <h1>Success!</h1>
        <p >Your Appointment has been successfully booked</p>

        <div id='formData' style={{opacity: 1, position: 'absolute', zIndex: '-1'}}>
          <h1>Name: {firstName} {lastName}</h1>
          <p>Date: {meetingDate} </p>
          <p>TIme: @{meetingTime}</p>
          <p>Appointment Type: {appointmentType}</p>
          <p>sex: {sex}</p>
          <h3>Doctor: Mr Phil Michaelson</h3>
        </div>

        <button onClick={() => handleDocument()} className={PopUpModal.successButtons}>
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
