import HomepageStyles from "@/styles/HomePage.module.css";
import Image from "next/image";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay]);

function TestimoniesCarousel() {
  const pagination = {
    el: ".image3-swiper-pagination",
    clickable: false,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className={HomepageStyles.testimoniesSwiperContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={pagination}
        direction={"horizontal"}
        autoplay={{ delay: 6000 }}
        spaceBetween={30}
        // grabCursor={true}
        wrapperClass={HomepageStyles.testimoniesCarousel}

        className={HomepageStyles.swipers}
      >
        <div className={HomepageStyles.hospitalsCarousel}>
          <SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
            <div className={HomepageStyles.testimoniesCarouselImg}>
              <Image
                src="/signInImage.webp"
                height={150}
                width={150}
                alt="careFinderTestimony"
                quality={100}
              />
            </div>
            <h2>“Excellence”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis imperdiet tempus. Curabitur eget maximus ipsum. Morbi
              aliquet felis et libero tempus, ut dictum orci laoreet.
            </p>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
            <div className={HomepageStyles.testimoniesCarouselImg}>
              <Image
                src="/signUpImage.webp"
                height={150}
                width={150}
                alt="careFinderTestimony"
                quality={100}
              />
            </div>
            <h2>“Excellence”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis imperdiet tempus. Curabitur eget maximus ipsum. Morbi
              aliquet felis et libero tempus, ut dictum orci laoreet.
            </p>
          </SwiperSlide>
          <SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
            <div className={HomepageStyles.testimoniesCarouselImg}>
              <Image
                src="/DrOwen.png"
                height={150}
                width={150}
                alt="careFinderTestimony"
                quality={100}
              />
            </div>
            <h2>“Excellence”</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis imperdiet tempus. Curabitur eget maximus ipsum. Morbi
              aliquet felis et libero tempus, ut dictum orci laoreet.
            </p>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
export default TestimoniesCarousel;
