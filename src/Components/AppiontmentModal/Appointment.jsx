import PopUpModal from "@/styles/PopUpModal.module.css";
import { color } from "framer-motion";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdHeight } from "react-icons/md";
import { RiHospitalLine } from "react-icons/ri";
import MeetingOption from "./MeetingOption";
import MeetingDate from "./MeetingDate";
import MeetingTime from "./MeetingTime";

function Appointment({formUpdate, formDetails}) {
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
      <MeetingOption formUpdate={formUpdate} formDetails={formDetails} />
      <MeetingDate />
      <MeetingTime formUpdate={formUpdate} />
    </>
  );
}

export default Appointment;
