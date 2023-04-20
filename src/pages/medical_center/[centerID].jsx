import NavBar from "@/Components/HomePage/NavBar";
import Footer from "@/Components/HomePage/Footer";
import Head from "next/head";
import HospitalDetails from "@/Components/MedicalCenter/HospitalDetails";
import HospitalDoctors from "@/Components/MedicalCenter/HospitalDoctors";
import Styles from "@/styles/MedicalCenter.module.css";
import { useEffect, useState } from "react";
import PopUpModal from "@/Components/AppiontmentModal/PopUpModal";

export default function MedicalCentre() {
  // Testing modal with nav component
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      const main = document.querySelector("html");
      main.style.overflowY = "hidden";
    } else {
      const main = document.querySelector("html");
      main.style.overflowY = "scroll";
    }
    console.log(showModal);
  }, [showModal]);
  return (
    <>
      <Head>
        <title>Care Finder Explore</title>
        <meta
          name="description"
          content="Easily schedule appointments with expert medical specialists near you, at a time and place that suits you best."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showModal ? (
        <PopUpModal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        ""
      )}
      <NavBar returnBack={true} />
      <div className={Styles.medical_center}>
        <div className={Styles.grid_container}>
          <HospitalDetails />
          <HospitalDoctors showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
}
