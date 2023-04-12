import React from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import PopUpModal from "@/styles/PopUpModal.module.css";
import MeetingCarousel from "./MeetingCarousel";

function MeetingDate() {
  return (
    <>
      <div className={PopUpModal.meetingDate}>
        <div className={PopUpModal.ArrBtns}>
          <div className={PopUpModal.arrContainer}>
            <RiArrowLeftLine className="image5-swiper-button-prev" />
          </div>
          <div className={PopUpModal.arrContainer}>
            <RiArrowRightLine className="image5-swiper-button-next" />
          </div>
        </div>
        <MeetingCarousel />
      </div>
    </>
  );
}

export default MeetingDate;
