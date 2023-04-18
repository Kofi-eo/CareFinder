import { useState, useEffect } from "react";
import Styles from "@/styles/ProfilePage.module.css";
import NavBar from "@/Components/HomePage/NavBar";
import Head from "next/head";
import { FaHistory } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";
import { useAuth } from "./_app";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { firestore } from "../Firebase/firebase.config";
import { query, getDocs, collection, addDoc } from "firebase/firestore";
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Profile() {
    const router = useRouter();
    const { user } = useAuth();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        phoneNo: "",
        address: "",
        bloodType: "",
    });

    // console.log(form);
    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         if (user?.email) {
    //             // if user is signed in check if the user profile exists then setForm
    //             const userProfile = collection(firestore,
    //                 "Profiles",
    //                 user?.email,
    //                 "userInfo");
    //             const q = query(userProfile);
    //             const docSnap = await getDocs(q);
    //             const profile = querySnapshot?.docs[0]?.data();

    //             if (!docSnap.empty) setForm(profile);
    //         }
    //     };

    //     fetchProfile();

    // }, [user?.email]);


    const submitProfile = async (e) => {
        e.preventDefault();
        if (user?.email) {
            // if user is signed in check if the user profile exists
            const userProfile = collection(firestore,
                "Profiles",
                user?.email,
                "userInfo");
            const q = query(userProfile);
            const docSnap = await getDocs(q);


            // if there is no profile then add the filled in details to the database
            if (docSnap.empty) {
                try {
                    await addDoc(collection(firestore, "Profiles", user?.email, "userInfo"), {
                        firstName: form.firstName,
                        lastName: form.lastName,
                        dateOfBirth: form.dateOfBirth,
                        email: form.email,
                        phoneNo: form.phoneNo,
                        address: form.address,
                        blood: form.bloodType,
                        created_at: new Date()
                    });

                } catch (error) {
                    toast.error('something went wrong');
                    console.log(error);
                    setSubmitting(false);
                }
            }
        } else {
            toast('sign in required');
            router.push('/Auth');
        }
    };

    const onChange = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <>
            <Head>
                <title>Care Finder Profile</title>
                <meta
                    name="description"
                    content="Easily schedule appointments with expert medical specialists near you, at a time and place that suits you best."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar returnBack={true} />
            <section className={Styles.pageContainer}>
                <div className={Styles.features}>
                    <p className={pt_sans.className}><FaPen />  <span>Edit Profile</span></p>
                    <p className={pt_sans.className}><FaHistory />  <span>Appointment History</span></p>
                    <p className={pt_sans.className}><FaLock /> <span>Password & Security</span></p>
                </div>


                <form onSubmit={submitProfile} className={Styles.details_section}>
                    <section className={Styles.details_container}>
                        <div className={Styles.imgContainer}>
                            <FaPen />
                        </div>
                        <div className={Styles.details_inputs}>
                            <div className={Styles.two_input_divs}>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className}>First Name</label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        required
                                        value={form.firstName}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className}>Last Name </label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        required
                                        value={form.lastName}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className}>Date of Birth</label>
                                    <input
                                        name="dateOfBirth"
                                        type="date"
                                        required
                                        value={form.dateOfBirth}
                                        onChange={onChange}
                                    />
                                </div>
                                <div></div>
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={Styles.input_item} id='number_input_container'>
                                <span className={Styles.numberText}>+234 </span>
                                <label className={pt_sans.className}>Phone Number</label>
                                <input
                                    name="phoneNo"
                                    type="text"
                                    required
                                    value={form.phoneNo}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    required
                                    value={form.address}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </section>

                    <section className={Styles.bottom_section}>
                        <hr className={Styles.hr} />
                        <div style={{ display: 'grid', gridTemplateColumns: '30% auto', gap: '2em' }}>


                            <div className={Styles.input_item}>
                                <label className={pt_sans.className} >Blood Type</label>
                                <select name="blood-group" placeholder="Blood Group" onChange={(event) => {
                                    setForm((prev) =>
                                        ({ ...prev, bloodType: event.target.value }));
                                }}>

                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className} >Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '30% auto', gap: '2em' }}>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className} >Name</label>
                                <input type="text" />
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className} >Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className={Styles.textArea_container}>
                            <label className={pt_sans.className}>Name</label>
                            <textarea className={Styles.textarea} />
                        </div>

                        <input value='save' type='submit' className={Styles.button} />
                    </section>
                </form>
            </section>

        </>
    );
};
