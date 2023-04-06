import HomepageStyles from "@/styles/HomePage.module.css";
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";
import SearchBox from "./SearchBox";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });

function Header() {
  return (
    <div className={HomepageStyles.headerContainer}>
      <header>
        <div className={HomepageStyles.headerText}>
          <h1 className={lexend.className}>Effortless Medical Assistance</h1>
          <p className={pt_sans.className}>
            Easily schedule appointments with expert medical specialists near
            you, at a time and place that suits you best.
          </p>
          <img src="/heroImage.webp" alt="" />
        </div>
        <SearchBox />
      </header>
    </div>
  );
}

export default Header;
