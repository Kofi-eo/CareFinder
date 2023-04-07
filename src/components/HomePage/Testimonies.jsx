import HomepageStyles from "@/styles/HomePage.module.css";
import { Lexend } from "next/font/google";
import TestimoniesCarousel from "./TestimoniesCarousel";
import { RiArrowRightLine } from "react-icons/ri";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });

function Testimonies() {
  return (
    <>
      <hr className={HomepageStyles.hospitalsNearDivider} />
      <div className={HomepageStyles.TestimoniesContainer}>
        <h1 className={lexend.className}>
          What our beloved clients are saying
        </h1>
        <TestimoniesCarousel />
        <div className={HomepageStyles.testimoniesPagination}>
          <div className="image3-swiper-pagination"></div>
        </div>
      </div>
    </>
  );
}

export default Testimonies;
