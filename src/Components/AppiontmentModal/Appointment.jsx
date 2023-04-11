import PopUpModal from "@/styles/PopUpModal.module.css";
import { AiFillStar } from "react-icons/ai";
import { RiHospitalLine } from "react-icons/ri";

function Appointment() {
  return (
    <>
      <div className={PopUpModal.appointmentContainer}>
        <div className={PopUpModal.doctorImg}>
          <img src="/DrOwen.png" alt="" />
        </div>
        <div className={PopUpModal.doctordetails}>
          <h1>Dr. Paul Eneche</h1>
          <h2>Dentist</h2>
          <p>
            <AiFillStar style={{ color: "#FFD75F" }} /> 4.5 (54)
          </p>
          <p>
            <RiHospitalLine /> Elina Hospital
          </p>
        </div>
      </div>
      <div className={PopUpModal.meetingOption}>
        <div className={PopUpModal.meetingOptionBox}>
          <div>
            <h1>In-Person</h1>
          </div>
          <div>
            <h1>Viedo Call</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
