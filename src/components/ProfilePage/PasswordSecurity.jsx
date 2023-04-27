import Styles from "@/styles/ProfilePage.module.css";
import { Lexend, PT_Sans } from "next/font/google";
import { useState } from "react";
import { useSendPasswordResetEmail, } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../../Firebase/firebase.config";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function PasswordSecurity() {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('');

    // handle password reset
    const handleReset = async (e) => {
        e.preventDefault();
        try {
            // send password reset email
            await sendPasswordResetEmail(email);
            toast.success('reset password email sent, please check your inbox');
        } catch (error) {
            toast.error('this email is not registered');
        } finally {
            setEmail("");
        }
    };

    return (
        <>
            <Toaster />
            <div className={Styles.password_container}>
                <h1 className={lexend.className} style={{ fontWeight: 'lighter' }}>Reset Password</h1>
                <br />
                <div className={Styles.details_inputs}>
                    <div className={Styles.input_item} >
                        <label className={pt_sans.className}>Type your registered email to send a link to reset your password</label>
                        <input type={'email'} placeholder='example@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <button className={Styles.button} onClick={() => handleReset()} >Reset</button>
            </div>
        </>

    );
}
