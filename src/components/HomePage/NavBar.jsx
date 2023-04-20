import HomepageStyles from "@/styles/HomePage.module.css";
import { signOut } from "firebase/auth";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { auth } from "../../Firebase/firebase.config";


function NavBar({ returnBack = false }) {
  // To return the navbar back to normal on the explore page
  useEffect(() => {
    if (returnBack) {
      let nav = document.getElementById('nav');
      nav.style.width = '100vw';
      nav.style.marginTop = '70px';
    }
  }, []);

  // Navigation animation on Scroll
  if (!returnBack) {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
      let nav = document.getElementById('nav');
      if (latest >= 300) {
        nav.style.width = '100vw';
        nav.style.marginTop = '70px';
        nav.style.position = 'fixed';
      } else {
        nav.style.width = '90vw';
        nav.style.marginTop = '120px';
        nav.style.position = 'absolute';
      }
    });
  }

  return (
    <div>
      <div className={HomepageStyles.centerNav}>
        <nav id='nav' className={HomepageStyles.nav}>
          <Link href='/'>
            <Image
              src='/Logo-Black.svg'
              alt='careFinder'
              height={60}
              width={60}
            />
          </Link>

          <div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Explore">Appointment</Link>
              </li>
              {user ? <Link href="/Auth">
                <li className={HomepageStyles.loginButton}>Login/SignUp</li>
              </Link> :
                <li className={HomepageStyles.loginButton} onClick={() => signOut(auth)}>Log Out</li>
              }

              <button className={HomepageStyles.navButton}>
                <RiMenu4Fill />
              </button>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link href='Home'>Home</Link>
              </li>
              <li>
                <Link href='/Explore'>Appointment</Link>
              </li>
              <Link href='/Auth'>
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
