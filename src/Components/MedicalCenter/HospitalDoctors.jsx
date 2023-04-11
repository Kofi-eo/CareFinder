import DoctorsCard from "./DoctorsCard";
import Styles from "@/styles/MedicalCenter.module.css";
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function HospitalDoctors({ showModal, setShowModal }) {
  return (
    <div className={Styles.hospital_doctors}>
      <div className={Styles.filter_bar}>
        <div className={Styles.filter_item}>
          <label className={pt_sans.className}>Sort By</label>
          <select name="Department" id="Department" placeholder="">
            <option
              value=""
              disabled
              defaultValue={"Select your option"}
            ></option>
            <option value=""></option>
            <option value="">Private</option>
          </select>
        </div>

        <div className={Styles.filter_item}>
          <label className={pt_sans.className}>Department</label>
          <select name="Department" id="Department" placeholder="">
            <option
              value=""
              disabled
              defaultValue={"Select your option"}
            ></option>
            <option value=""></option>
            <option value="">Private</option>
          </select>
        </div>
      </div>

      <div className={Styles.doctorsCard_container}>
        <DoctorsCard showModal={showModal} setShowModal={setShowModal} />
        <DoctorsCard showModal={showModal} setShowModal={setShowModal} />
        <DoctorsCard showModal={showModal} setShowModal={setShowModal} />
        <DoctorsCard showModal={showModal} setShowModal={setShowModal} />
        <DoctorsCard showModal={showModal} setShowModal={setShowModal} />
        <DoctorsCard showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}
