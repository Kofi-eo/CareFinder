import HomepageStyles from "@/styles/HomePage.module.css";
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { RiArrowLeftLine } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { MdPeopleOutline } from "react-icons/md";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function InfoSection() {
  return (
    <div className={HomepageStyles.infoSectionContainer}>
      <div className={HomepageStyles.infoSection}>
        <div className={HomepageStyles.imgAndIcon}>
          <img src="/Time.png" alt="" />
          <div className={HomepageStyles.infoIcons}>
            <MdOutlinePhoneIphone />
          </div>
        </div>
        <h1 className={lexend.className}>Convenient</h1>
        <p className={pt_sans.className}>
          Book appointments with specialist physicians from the comfort of their
          own homes
        </p>
      </div>
      <div className={HomepageStyles.infoSection}>
        <div className={HomepageStyles.imgAndIcon}>
          <img src="/Fill.png" alt="" />
          <div className={HomepageStyles.infoIcons}>
            <BiTimeFive />
          </div>
        </div>
        <h1 className={lexend.className}>Time-Saving</h1>
        <p className={pt_sans.className}>
          Save Time and Hassle with Our System for Booking Appointments with
          Specialist Physicians
        </p>
      </div>
      <div className={HomepageStyles.infoSection}>
        <div className={HomepageStyles.imgAndIcon}>
          <img src="/Doctors.png" alt="" />
          <div className={HomepageStyles.infoIcons}>
            <MdPeopleOutline />
          </div>
        </div>
        <h1 className={lexend.className}>Access</h1>
        <p className={pt_sans.className}>
          Gain access to top-rated specialist physicians who are experts in
          their fields
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
