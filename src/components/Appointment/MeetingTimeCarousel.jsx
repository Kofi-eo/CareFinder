import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";
import PopUpModal from "@/styles/PopUpModal.module.css";

function MeetingDateCarousel({formUpdate}) {
  return (
    <div className={PopUpModal.swiperTimeContainer}>
      <Swiper
        navigation={{
          nextEl: ".image6-swiper-button-next",
          prevEl: ".image6-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        slidesPerView={3.5}
        spaceBetween={30}
        wrapperClass={PopUpModal.wrapper}
        className={PopUpModal.swiper}
      >
        <SwiperSlide>
          <div onClick={() => formUpdate('meetingTime','7:15 AM')} className={PopUpModal.timeCarouselContainer}>
            <div className={PopUpModal.timeCarouselItem}>
              <h2>7:15 AM</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div onClick={() => formUpdate('meetingTime','7:30 AM')} className={PopUpModal.timeCarouselContainer}>
            <div className={PopUpModal.timeCarouselItem}>
              <h2>7:30 AM</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div onClick={() => formUpdate('meetingTime','7:45 AM')} className={PopUpModal.timeCarouselContainer}>
            <div className={PopUpModal.timeCarouselItem}>
              <h2>7:45 AM</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div onClick={() => formUpdate('meetingTime','7:55 AM')} className={PopUpModal.timeCarouselContainer}>
            <div className={PopUpModal.timeCarouselItem}>
              <h2>7:55 AM</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div onClick={() => formUpdate('meetingTime','8:00 AM')} className={PopUpModal.timeCarouselContainer}>
            <div className={PopUpModal.timeCarouselItem}>
              <h2>8:00 AM</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MeetingDateCarousel;
