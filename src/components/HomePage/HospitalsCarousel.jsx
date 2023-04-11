import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper";
import HomepageStyles from "@/styles/HomePage.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import MedicalCentreCard from "../Cards/MedicalCentreCard";

function HospitalsCarousel() {
  const sampleData = [
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
    {
      image: "/signInImage.webp",
      hospital: "Kelina Hospital",
      location: "9, beside Access Bank, Abuja, Nigeria",
      distance: "5.3km",
      specialists: 12,
    },
  ];

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
    } else if (windowWidth <= 1024) {
      setSlides(2.5);
    } else if (windowWidth <= 1440) {
      setSlides(3.5);
    } else if (windowWidth >= 1500) {
      setSlides(5);
    }
  }, [windowWidth]);

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
          {sampleData.map((x, index) => (
            <SwiperSlide key={index}>
              <MedicalCentreCard details={x} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default HospitalsCarousel;
