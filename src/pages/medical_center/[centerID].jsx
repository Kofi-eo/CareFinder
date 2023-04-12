import NavBar from "@/Components/HomePage/NavBar"
import Footer from "@/Components/HomePage/Footer"
import Head from "next/head"
import HospitalDetails from "@/Components/MedicalCenter/HospitalDetails"
import HospitalDoctors from "@/Components/MedicalCenter/HospitalDoctors"
import Styles from "@/styles/MedicalCenter.module.css"

export default function MedicalCentre() {
    return (
        <>
            <Head>
                <title>Care Finder Explore</title>
                <meta
                    name="description"
                    content="Easily schedule appointments with expert medical specialists near you, at a time and place that suits you best."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar returnBack={true}/>
            <div className={Styles.medical_center}>
                <div className={Styles.grid_container}>
                    <HospitalDetails />
                    <HospitalDoctors />
                </div>
            </div>
        </>
    )
}