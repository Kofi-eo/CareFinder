import Footer from "./Footer";
import Header from "./Header";
import HospitalsNear from "./HospitalsNear";
import InfoSection from "./InfoSection";
import InfoSectionTwo from "./InfoSectionTwo";
import NavBar from "./NavBar";
import PharmaciesNear from "./PharmaciesNear";
import Testimonies from "./Testimonies";
import Trust from "./Trust";

function HomePageHeader() {
  return (
    <>
      <NavBar />
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
