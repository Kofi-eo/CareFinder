import NavBar from "@/Components/HomePage/NavBar";
import AppointmentHistory from "@/Components/ProfilePage/AppointHistory";
import EditProfile from "@/Components/ProfilePage/EditProfile";
import PasswordSecurity from "@/Components/ProfilePage/PasswordSecurity";
import Styles from "@/styles/ProfilePage.module.css";
import { Lexend, PT_Sans } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
import { FaHistory, FaLock, FaPen } from "react-icons/fa";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Profile() {

    const displayArray = ['editProfile', 'appointHistory', 'passwordSecurity'];
    const [display, setDisplay] = useState('');

    function switchDisplay(newSection) {
        setDisplay(newSection);
    }

    function displayWhat() {
        if (display == '' || display == displayArray[0]) {
            return <EditProfile />;
        } else if (display == displayArray[1]) {
            return <AppointmentHistory />;
        } else {
            return <PasswordSecurity />;
        }
    }


    return (
        <>
            <Head>
                <title>Care Finder Profile</title>
                <meta
                    name="description"
                    content="Welcome to your profile"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar returnBack={true} />
            <section className={Styles.pageContainer}>
                <div className={Styles.features}>
                    <p onClick={() => switchDisplay(displayArray[0])} className={pt_sans.className}><FaPen />  <span>Edit Profile</span></p>
                    <p onClick={() => switchDisplay(displayArray[1])} className={pt_sans.className}><FaHistory />  <span>Appointment History</span></p>
                    <p onClick={() => switchDisplay(displayArray[2])} className={pt_sans.className}><FaLock /> <span>Password & Security</span></p>
                </div>

                <div className={Styles.details_section}>
                    {displayWhat()}
                </div>
            </section>

        </>
    );
}