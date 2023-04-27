import { PT_Sans } from "next/font/google";
import Styles from "@/styles/ProfilePage.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function AppointmentHistory({history}) {

    // To Print out slip
    function handleDocument() {
        const doc = new jsPDF();

        const formData = document.getElementById('formData')

        setTimeout(() => {
            // Convert the HTML element to canvas
            html2canvas(formData).then((canvas) => {
            // Add the canvas to the PDF document
            const imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 10, 10, 180, 180);
        
            // Save and download the PDF document
            doc.save("form-data.pdf");
            });
        })
    }
    
    // conditionally render appointmentHistory Data
    const display = history.length <= 0 ?
        <p>You currently have no appointments</p> :
            history.map(({meetingTime, meetingDate, sex, firstName, lastName, appointmentType, doctorsName}, i) => (
            <>
                <div key={i} className={Styles.appointment_item}>
                    <h3>{doctorsName}<span>{meetingTime}, {meetingDate}</span></h3>
                    <button onClick={() => handleDocument()}>Print Slip</button>
                </div>
                <hr />
            </>
    ))
        
    return (
        <div className={Styles.appointment_section}>
            <h1 className={pt_sans.className} style={{fontWeight: 'lighter'}}>Appointments</h1>
            <p>History</p>
            <hr />
            {display}
        </div>
    )
}
