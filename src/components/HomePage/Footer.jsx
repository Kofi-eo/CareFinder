import React from "react";
import HomepageStyles from "@/styles/HomePage.module.css";
import Link from "next/link";
import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function Footer() {
  return (
    <div className={pt_sans.className}>
      <div className={HomepageStyles.footerContainer}>
        <div className={HomepageStyles.carefinder}>
          <img src="Logo-White.svg" alt="" />
          <p>
            Easily schedule appointments with expert medical specialists near
            you, at a time and place that suits you best.
          </p>
          <ul>
            <li>
              <Link href="">Privacy</Link>
            </li>
            <li>
              <Link href="">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className={HomepageStyles.pages}>
          <h3>Pages</h3>
          <ul>
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Explore</Link>
            </li>
            <li>
              <Link href="">Profile</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
          </ul>
        </div>
        <div className={HomepageStyles.contacts}>
          <h3>Contacts</h3>
          <ul>
            <li>
              <Link href="">contact@carefinder.com</Link>
            </li>
            <li>
              <Link href="">+234 000 000</Link>
            </li>
            <li>
              <Link href="">careFinder St, 173942 asshjad,aijso</Link>
            </li>
          </ul>
        </div>
        <div className={HomepageStyles.socials}>
          <h3>Socials</h3>
          <ul>
            <li>
              <Link href="">Instagram</Link>
            </li>
            <li>
              <Link href="">Twitter</Link>
            </li>
            <li>
              <Link href="">Linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
