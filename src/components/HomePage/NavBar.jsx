import Link from "next/link";
import HomepageStyles from "@/styles/HomePage.module.css";

import { RiMenu4Fill } from "react-icons/ri";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function NavBar({ returnBack = false }) {
  // To return the navbar back to normal on the explore page
  useEffect(() => {
    if (returnBack) {
      let nav = document.getElementById("nav");
      nav.style.width = "100vw";
      nav.style.marginTop = "70px";
    }
  }, []);

  // Navigation animation on Scroll
  if (!returnBack) {
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
  }

  return (
    <div className={HomepageStyles.centerNav}>
      <nav id="nav" className={HomepageStyles.nav}>
        <Link href="/">
          {" "}
          <img src="/CarefinderLogo.png" alt="" />
        </Link>

        <ul className={pt_sans.className}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="Explore">Explore</Link>
          </li>
          <Link href="">
            <li className={HomepageStyles.loginButton}>Login/Sign Up </li>
          </Link>
        </ul>
        <button className={HomepageStyles.navButton}>
          <RiMenu4Fill />
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
