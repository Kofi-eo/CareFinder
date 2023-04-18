import React from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import PopUpModal from "@/styles/PopUpModal.module.css";
import MeetingCarousel from "./MeetingCarousel.jsx";

function MeetingDate() {
  return (
    <>
      <div className={PopUpModal.meetingDate}>
        <div className={PopUpModal.ArrBtns}>
          <div className="image5-swiper-button-prev">
            <RiArrowLeftLine />
          </div>
          <div className="image5-swiper-button-next">
            <RiArrowRightLine />
          </div>
        </div>
        <MeetingCarousel />
      </div>
    </>
  );
}

export default MeetingDate;
