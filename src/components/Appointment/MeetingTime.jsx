import React from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import PopUpModal from "@/styles/PopUpModal.module.css";
import MeetingTimeCarousel from "./MeetingTimeCarousel";

function MeetingTime({formUpdate}) {
  return (
    <>
      <div className={PopUpModal.meetingTime}>
        <div className={PopUpModal.ArrBtns}>
          <div className="image6-swiper-button-prev">
            <RiArrowLeftLine />
          </div>
          <div className="image6-swiper-button-next">
            <RiArrowRightLine />
          </div>
        </div>
        <MeetingTimeCarousel formUpdate={formUpdate}/>
      </div>
    </>
  );
}

export default MeetingTime;
