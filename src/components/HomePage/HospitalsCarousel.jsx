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
    if (windowWidth <= 500) {
      setSlides(1);
    } else if (windowWidth <= 700) {
      setSlides(1.5);
    } else if (windowWidth <= 900) {
      setSlides(2);
    } else if (windowWidth === 1024) {
      setSlides(3.2);
    } else if (windowWidth === 1200) {
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
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        className={HomepageStyles.swiper}
      >
        <div className={HomepageStyles.hospitalsCarousel}>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div className={HomepageStyles.SpecialistsAvailable}>
                <p> 5 Specialists Available</p>
              </div>
              <div>
                <h2>Kelina</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <div className={HomepageStyles.SpecialistsAvailable}>
              <p> 5 Specialists Available</p>
            </div>
            <img src="/signInImage.webp" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div>
                <h2>Kelina</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <div className={HomepageStyles.SpecialistsAvailable}>
              <p> 5 Specialists Available</p>
            </div>
            <img src="/signUpImage.webp" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div>
                <h2>Kelina</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <div className={HomepageStyles.SpecialistsAvailable}>
              <p> 5 Specialists Available</p>
            </div>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div>
                <h2>Kelina</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <div className={HomepageStyles.SpecialistsAvailable}>
              <p> 5 Specialists Available</p>
            </div>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div>
                <h2>Kelina</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p>
                <IoLocationSharp /> 5.3km
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.hospitalsCarouselContainer}>
            <div className={HomepageStyles.SpecialistsAvailable}>
              <p> 5 Specialists Available</p>
            </div>
            <img src="/DrOwen.png" alt="" />
            <div className={HomepageStyles.hospitalsCarouselItem}>
              <div>
                <h2>Kelina</h2>
                <p className={HomepageStyles.address}>
                  9, beside Access Bank, Abuja, Nigeria
                </p>
              </div>
              <p>
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
