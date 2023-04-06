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
          <RiArrowLeftLine className="image-swiper-button-prev" />
          <RxDotFilled className={HomepageStyles.hospitalsNearDot} />
          <div className="image-swiper-pagination"></div>
          <RiArrowRightLine className="image-swiper-button-next" />
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
