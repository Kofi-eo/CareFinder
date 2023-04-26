import Styles from "@/styles/ProfilePage.module.css";
import { PT_Sans } from "next/font/google";
import { Lexend } from "next/font/google";
import { useState } from "react";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function PasswordSecurity() {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({display: false, message: ''})

    // handle password reset.
    function handleReset() {
        if (confirmPassword !== newPassword) {
            setError({display: true, message: 'new passwords dont match'})
            return
        }
        console.log('Reset Password')
    }
    
    return (
        <>
            <h1 className={lexend.className} style={{fontWeight: 'lighter'}}>Reset Password</h1>
            <br />
            <div className={Styles.details_inputs}>
                <div className={Styles.input_item}>
                    <label className={pt_sans.className}>Old Password</label>
                    <input type={'password'} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                </div>
                <div className={Styles.input_item} >
                    <label className={pt_sans.className} >New Password</label>
                    <input type={'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className={Styles.input_item} >
                    <label className={pt_sans.className} >Confirm Password</label>
                    <input type={'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
            </div>
            {error.display &&  <p style={{color: 'red'}}>{error.message}</p>}
            <button className={Styles.button} onClick={() => handleReset()} >Reset</button>
        </>

        )
}
