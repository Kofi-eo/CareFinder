import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";
import HomepageStyles from "@/styles/HomePage.module.css";
import PopUpModal from "@/styles/PopUpModal.module.css";

function MeetingCarousel() {
  return (
    <>
      <div className={PopUpModal.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          speed={600}
          // pagination={pagination}
          direction={"horizontal"}
          slidesPerView={2.5}
          spaceBetween={10}
          grabCursor={true}
          wrapperClass={PopUpModal.dateCarousel}
          navigation={{
            nextEl: ".image5-swiper-button-next",
            prevEl: ".image5-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
        >
          <div className={PopUpModal.dateCarousel}>
            <SwiperSlide className={PopUpModal.dateCarouselContainer}>
              <div className={PopUpModal.dateCarouselItem}>
                <h1>Today</h1>
                <p>
                  12 March <br /> 2023
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={PopUpModal.dateCarouselContainer}>
              <div className={PopUpModal.dateCarouselItem}>
                <h1>Today</h1>
                <p>
                  12 March <br /> 2023
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={PopUpModal.dateCarouselContainer}>
              <div className={PopUpModal.dateCarouselItem}>
                <h1>Today</h1>
                <p>
                  12 March <br /> 2023
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={PopUpModal.dateCarouselContainer}>
              <div className={PopUpModal.dateCarouselItem}>
                <h1>Today</h1>
                <p>
                  12 March <br /> 2023
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default MeetingCarousel;
