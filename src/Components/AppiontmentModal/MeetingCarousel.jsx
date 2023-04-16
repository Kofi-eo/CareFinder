import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";
import PopUpModal from "@/styles/PopUpModal.module.css";
import "swiper/css";

function MeetingCarousel() {
  return (
    <div className={PopUpModal.swiperContainer}>
      <Swiper
        navigation={{
          nextEl: ".image5-swiper-button-next",
          prevEl: ".image5-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
        slidesPerView={3.5}
        spaceBetween={0}
        className={PopUpModal.swiper}
      >
        <SwiperSlide>
          <div className={PopUpModal.dateCarouselContainer}>
            <div className={PopUpModal.dateCarouselItem}>
              <h1>Today</h1>
              <p>
                12 March <br /> 2023
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={PopUpModal.dateCarouselContainer}>
            <div className={PopUpModal.dateCarouselItem}>
              <h1>Today</h1>
              <p>
                12 March <br /> 2023
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={PopUpModal.dateCarouselContainer}>
            <div className={PopUpModal.dateCarouselItem}>
              <h1>Today</h1>
              <p>
                12 March <br /> 2023
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={PopUpModal.dateCarouselContainer}>
            <div className={PopUpModal.dateCarouselItem}>
              <h1>Today</h1>
              <p>
                12 March <br /> 2023
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MeetingCarousel;
