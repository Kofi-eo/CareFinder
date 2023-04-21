import Styles from "@/styles/MedicalCenter.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function DoctorsCard({ showModal, setShowModal, name }) {
  return (
    <div className={Styles.doctor_card}>
      <Image src={"/DrOwen.png"} height={100} width={100} />
      <h3 className={lexend.className}>Dr. {name}</h3>
      <p className={pt_sans.className}>Dentist</p>
      <div className={Styles.drOwenStars}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <p className={pt_sans.className} style={{ fontWeight: "bolder" }}>
        Next Available Appointment
      </p>
      <p className={pt_sans.className}>Wed, 12 March(7:15AM)</p>
      <button style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>
        Book Appointment
      </button>
    </div>
  );
}
