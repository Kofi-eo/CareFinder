import { PT_Sans } from "next/font/google";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function AppointmentHistory({history}) {

    // conditionally render appointmentHistory Data
    const display = history.length <= 0 ?
        <p>You currently have no appointments</p> :
            history.map(({meetingTime, meetingDate, sex, firstName, lastName, appointmentType}, i) => (
        <div key={i} style={{border: '1px solid green', marginTop: '1em', padding: '0.6em', borderRadius: '10px'}}>
            <p><span style={{color: 'green'}}>Appointment with </span>- Dr Paul Eneche @{meetingTime} on {meetingDate}</p>
            <p><span style={{color: 'green'}}>Appointment Type </span>- {appointmentType}</p>
        </div>
    ))
        
    return (
        <>
            <h1 className={pt_sans.className} style={{fontWeight: 'lighter'}}>Appointment History Page</h1>
            {display}
        </>
    )
}
