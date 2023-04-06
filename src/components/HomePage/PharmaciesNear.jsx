import HomepageStyles from "@/styles/HomePage.module.css";
import PharmaciesCarousel from "./PharmaciesCarousel";
import { Lexend } from "next/font/google";
import { RiArrowRightLine } from "react-icons/ri";
import { RiArrowLeftLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });

function PharmaciesNear() {
  return (
    <div className={HomepageStyles.hospitalsNearContainer}>
      <div className={HomepageStyles.hospitalsNearText}>
        <h1 className={lexend.className}>Pharmacies Near You</h1>
        <div className={HomepageStyles.hospitalsNearArrBtns}>
          <RiArrowLeftLine className="image2-swiper-button-prev" />
          <RxDotFilled className={HomepageStyles.hospitalsNearDot} />
          <div className="image-swiper-pagination"></div>
          <RiArrowRightLine className="image2-swiper-button-next" />
        </div>
      </div>
      <PharmaciesCarousel />
      <div className={HomepageStyles.hospitalsNearViewButton}>
        <Link href="">
          <button>View All</button>
        </Link>
      </div>
    </div>
  );
}

export default PharmaciesNear;
