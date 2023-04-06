import Header from "./Header";
import HospitalsNear from "./HospitalsNear";
import InfoSection from "./InfoSection";
import InfoSectionTwo from "./InfoSectionTwo";
import NavBar from "./NavBar";
import PharmaciesNear from "./PharmaciesNear";

function HomePageHeader() {
  return (
    <>
      {/* NavBar */}
      <NavBar />
      <Header />
      <InfoSection />
      <InfoSectionTwo />
      <HospitalsNear />
      <PharmaciesNear />
    </>
  );
}

export default HomePageHeader;
