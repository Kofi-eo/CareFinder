import PopUpModal from "@/styles/PopUpModal.module.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RiCalendarCheckLine } from "react-icons/ri";

function SucessModal({ setShowModal, formDetails }) {

  function handleDocument() {

    const doc = new jsPDF();

    const formData = document.getElementById('formData');

    setTimeout(() => {
      // Convert the HTML element to canvas
      html2canvas(formData).then((canvas) => {
        // Add the canvas to the PDF document
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10, 180, 180);

        // Save and download the PDF document
        doc.save("form-data.pdf");
      });
    });
  }

  const { firstName, lastName, sex, appointmentType, meetingDate, meetingTime } = formDetails;

  return (
    <>
      <div className={PopUpModal.sucessContainer}>
        <div className={PopUpModal.sucessBox}>
          <RiCalendarCheckLine style={{ fontSize: "80px" }} />
        </div>
        <h1>Success!</h1>
        <p >Your Appointment has been successfully booked</p>

        {/* Downloadable Appointment Details */}
        <div id='formData' className={PopUpModal.receipt}>
          <ul>
            <li><h1> {firstName} {lastName}</h1></li>
            <li><span style={{ color: '#003963' }}>Date:</span> {meetingDate} </li>
            <li><span style={{ color: '#003963' }}>TIme:</span> @{meetingTime}AM</li>
            <li><span style={{ color: '#003963' }}>Appointment Type:</span> {appointmentType}</li>
            <li><span style={{ color: '#003963' }}>sex:</span> {sex}</li>
            <li><h3><span style={{ color: '#003963' }}>Doctor:</span> Mr Phil Michaelson</h3></li>
          </ul>
        </div>
        {/*  */}

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
