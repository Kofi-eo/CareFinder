import HomepageStyles from "@/styles/HomePage.module.css";
import HospitalsCarousel from "./HospitalsCarousel";
import { Lexend } from "next/font/google";
import { RiArrowRightLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });

function HospitalsNear() {
  return (
    <div className={HomepageStyles.hospitalsNearContainer}>
      <div className={HomepageStyles.hospitalsNearText}>
        <h1 className={lexend.className}>Hospitals Near You</h1>
        <div className={HomepageStyles.hospitalsNearArrBtns}>
          <div className={HomepageStyles.arrowContainer}>
            <RiArrowLeftLine className="image-swiper-button-prev" />
          </div>
          <div className="image-swiper-pagination"></div>
          <div className={HomepageStyles.arrowContainer}>
            <RiArrowRightLine className="image-swiper-button-next" />
          </div>
        </div>
      </div>
      <HospitalsCarousel />
      <div className={HomepageStyles.hospitalsNearViewButton}>
        <Link href="">
          <button>View All</button>
        </Link>
      </div>
    </div>
  );
}

export default HospitalsNear;
