import HomepageStyles from "@/styles/HomePage.module.css";

function Trust() {
  return (
    <div className={HomepageStyles.trustContainer}>
      <h1>Trusted By over 300+ Medical Centres</h1>
      <div className={HomepageStyles.trustLogos}>
        <img src="/mLogo-02.svg" alt="" />
        <img src="/mLogo-03.svg" alt="" />
        <img src="/mLogo-04.svg" alt="" />
        <img src="/mLogo-05.svg" alt="" />
        <img src="/mLogo-06.svg" alt="" />
      </div>
    </div>
  );
}

export default Trust;
