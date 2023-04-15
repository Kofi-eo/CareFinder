import React from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import PopUpModal from "@/styles/PopUpModal.module.css";

function MeetingTime() {
  return (
    <>
      <div className={PopUpModal.meetingTime}>
        <div className={PopUpModal.ArrBtns}>
          <div className={PopUpModal.arrContainer}>
            <RiArrowLeftLine className="image5-swiper-button-prev" />
          </div>
          <div className={PopUpModal.arrContainer}>
            <RiArrowRightLine className="image5-swiper-button-next" />
          </div>
        </div>
        {/* <MeetingCarousel /> */}
      </div>
    </>
  );
}

export default MeetingTime;
