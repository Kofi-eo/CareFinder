import Link from "next/link";
import HomepageStyles from "@/styles/HomePage.module.css";
import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function NavBar() {
  return (
    <div className={HomepageStyles.centerNav}>
      <nav className={HomepageStyles.nav}>
        <img src="/CarefinderLogo.png" alt="" />

        <ul className={pt_sans.className}>
          <li>
            <Link href="Home">Home</Link>
          </li>
          <li>
            <Link href="Appointment">Appointment</Link>
          </li>
          <Link href="">
            <li className={HomepageStyles.loginButton}>Login/Sign Up </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
