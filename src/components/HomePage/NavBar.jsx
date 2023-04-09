import Link from "next/link";
import HomepageStyles from "@/styles/HomePage.module.css";

import { RiMenu4Fill } from "react-icons/ri";
import { useScroll, useMotionValueEvent } from "framer-motion";

function NavBar() {
  // Navigation animation on Scroll
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    let nav = document.getElementById("nav");
    if (latest >= 100) {
      nav.style.width = "100vw";
      nav.style.marginTop = "70px";
    } else {
      nav.style.width = "90vw";
      nav.style.marginTop = "90px";
    }
  });

  return (
    <div>
      <div className={HomepageStyles.centerNav}>
        <nav id="nav" className={HomepageStyles.nav}>
          <img src="/CarefinderLogo.png" alt="" />

          <ul>
            <li>
              <Link href="Home">Home</Link>
            </li>
            <li>
              <Link href="Appointment">Appointment</Link>
            </li>
            <Link href="">
              <li className={HomepageStyles.loginButton}>Login/SignUp</li>
            </Link>
          </ul>
          <button className={HomepageStyles.navButton}>
            <RiMenu4Fill />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
