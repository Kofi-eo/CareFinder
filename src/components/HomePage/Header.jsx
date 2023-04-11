import HomepageStyles from "@/styles/HomePage.module.css";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <div className={HomepageStyles.headerContainer}>
      <header>
        <div className={HomepageStyles.headerText}>
          <h1>Effortless Medical Assistance</h1>
          <p>
            Easily schedule appointments with expert medical specialists near
            you, at a time and place that suits you best.
          </p>
        </div>
        <div className={HomepageStyles.headerImage}> </div> <SearchBox />
      </header>
    </div>
  );
}

export default Header;
