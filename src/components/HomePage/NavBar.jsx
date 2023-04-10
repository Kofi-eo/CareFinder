import Link from "next/link";
import Image from "next/image";
import HomepageStyles from "@/styles/HomePage.module.css";
import { useEffect } from "react";

import { RiMenu4Fill } from "react-icons/ri";
import { useScroll, useMotionValueEvent } from "framer-motion";

function NavBar({returnBack = false}) {

  // To return the navbar back to normal on the explore page
  useEffect(() => {
    if(returnBack) {
      let nav = document.getElementById("nav");
      nav.style.width = "100vw";
      nav.style.marginTop = "70px";
    }
  },[])

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
    <div>
      <div className={HomepageStyles.centerNav}>
        <nav id="nav" className={HomepageStyles.nav}>
          <Link href="/">
            <Image
              src="/Logo-Black.svg"
              alt="careFinder"
              height={35}
              width={35}
            />
          </Link>

          <div>
            <ul>
              <li>
                <Link href="Home">Home</Link>
              </li>
              <li>
                <Link href="/Explore">Appointment</Link>
              </li>
              <Link href="/Auth">
                <li className={HomepageStyles.loginButton}>Login/SignUp</li>
              </Link>
            </ul>
            <button className={HomepageStyles.navButton}>
              <RiMenu4Fill />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
