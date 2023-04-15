import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";
import HomepageStyles from "@/styles/HomePage.module.css";
import PopUpModal from "@/styles/PopUpModal.module.css";

function MeetingCarousel() {
  return (
    <>
      <div className={PopUpModal.swiperContainer}>
        <div className={PopUpModal.dateCarouselContainer}>
          <div className={PopUpModal.dateCarouselItem}>
            <h1>Today</h1>
            <p>
              12 March <br /> 2023
            </p>
          </div>
          <div className={PopUpModal.dateCarouselItem}>
            <h1>Today</h1>
            <p>
              12 March <br /> 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetingCarousel;
