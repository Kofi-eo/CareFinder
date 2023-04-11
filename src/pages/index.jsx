import { useState } from "react";
import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";
import HospitalsNear from "../components/HomePage/HospitalsNear";
import InfoSection from "../components/HomePage/InfoSection";
import InfoSectionTwo from "../components/HomePage/InfoSectionTwo";
import NavBar from "../components/HomePage/NavBar";
import PharmaciesNear from "../components/HomePage/PharmaciesNear";
import Testimonies from "../components/HomePage/Testimonies";
import Trust from "../components/HomePage/Trust";
import Head from "next/head";
import PopUpModal from "@/Components/AppiontmentModal/PopUpModal";

function HomePageHeader() {
  // Testing modal with nav component
  const [showModal, setShowModal] = useState(false);
  if (showModal) {
    console.log("true");
    const main = document.querySelector("html");
    main.style.overflow = "hidden";
  }
  return (
    <>
      <Head>
        <title>Care Finder</title>
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
      <NavBar showModal={showModal} setShowModal={setShowModal} />
      <Header />
      <InfoSection />
      <InfoSectionTwo />
      <HospitalsNear />
      <PharmaciesNear />
      <Trust />
      <Testimonies />
      <Footer />
    </>
  );
}

export default HomePageHeader;
