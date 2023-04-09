import HomepageStyles from "@/styles/HomePage.module.css";
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function InfoSectionTwo() {
  return (
    <div className={HomepageStyles.infoSectionTwoContainer}>
      <div className={HomepageStyles.infoSectionTwoImage}>
        <img src="/DrOwen.png" alt="" />
        <div className={HomepageStyles.drOwenText}>
          <h3 className={pt_sans.className}>Dr. Florence Owen</h3>
          <p className={pt_sans.className}>Dietician</p>
        </div>
        <div className={HomepageStyles.drOwenStars}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <div className={HomepageStyles.infoSectionTwoText}>
        <h1 className={lexend.className}>Scheduling Made Easy</h1>
        <p className={pt_sans.className}>
          Take Charge of Your Health and Schedule with Ease - Discover Top
          Specialists Near You and Book Appointments at Your Convenience
        </p>
        <Link href="#" className={HomepageStyles.infoSectionTwoButton}>
          <button className={pt_sans.className}>Book an Appointment</button>
        </Link>
      </div>
    </div>
  );
}

export default InfoSectionTwo;
