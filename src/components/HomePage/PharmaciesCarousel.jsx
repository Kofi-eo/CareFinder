import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";
import HomepageStyles from "@/styles/HomePage.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { Lexend } from "next/font/google";
import { useEffect, useState } from "react";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });

function HospitalsCarousel() {
  const [slides, setSlides] = useState(3.5);

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    if (windowWidth <= 700) {
      setSlides(1);
    } else {
      setSlides(3.5);
    }
  }, [windowWidth]);

  const pagination = {
    el: ".image-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + 1 + "</span>";
    },
  };

  return (
    <div className={HomepageStyles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        speed={600}
        // pagination={pagination}
        direction={"horizontal"}
        slidesPerView={slides}
        spaceBetween={30}
        grabCursor={true}
        wrapperClass={HomepageStyles.hospitalsCarousel}
        navigation={{
          nextEl: ".image2-swiper-button-next",
          prevEl: ".image2-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        className={HomepageStyles.swiper}
      >
        <div className={HomepageStyles.hospitalsCarousel}>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={lexend.className}>
                <h2>Delvina Care</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p className={lexend.className}>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={lexend.className}>
                <h2>Delvina Care</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p className={lexend.className}>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={lexend.className}>
                <h2>Delvina Care</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p className={lexend.className}>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={lexend.className}>
                <h2>Delvina Care</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p className={lexend.className}>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={lexend.className}>
                <h2>Delvina Care</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p className={lexend.className}>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={lexend.className}>
                <h2>Delvina Care</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p className={lexend.className}>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default HospitalsCarousel;
