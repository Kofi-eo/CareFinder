import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function AppointmentHistory() {
    return (
        <h1 className={pt_sans.className} style={{fontWeight: 'lighter'}}>Appointment History Page</h1>
    )
}
