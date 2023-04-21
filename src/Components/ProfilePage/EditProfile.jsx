import Styles from "@/styles/ProfilePage.module.css";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { PT_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPen } from "react-icons/fa";
import { firestore } from "../../Firebase/firebase.config";
import { useAuth } from "../../pages/_app";


const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function EditProfile() {
    const router = useRouter();
    const { user, signedIn } = useAuth();
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        email: "",
        phone_no: "",
        address: "",
        blood_group: "",
        sex: "",
        height: "",
        weight: "",
        additional_info: ""

    });

    useEffect(() => {
        const fetchProfile = async () => {
            if (user?.email || signedIn) {
                // if user is signed in check if the user profile exists then setForm
                const userProfile = collection(firestore,
                    "Profiles",
                    user?.email,
                    "userInfo");
                const q = query(userProfile);
                const docSnap = await getDocs(q);
                const profile = docSnap?.docs[0]?.data();

                if (!docSnap.empty) {
                    setDisabled(true);
                    setForm(profile);
                }
            };
        };
        fetchProfile();

    }, [user?.email, signedIn]);


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
                        first_name: form.first_name,
                        last_name: form.last_name,
                        date_of_birth: form.date_of_birth,
                        email: form.email,
                        phone_no: form.phone_no,
                        address: form.address,
                        blood_group: form.blood_group,
                        sex: form.sex,
                        height: form.height,
                        weight: form.weight,
                        additional_info: form.additional_info,
                        created_at: new Date()
                    });

                    toast.success('Profile Created');
                } catch (error) {
                    toast.error('Error creating profile');
                    console.log(error);
                    setSubmitting(false);
                }
            } else {
                toast('profile already exists');
                setDisabled(true);
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
            <Toaster />
            <form onSubmit={submitProfile}>
                <section className={Styles.details_container}>
                    <div className={Styles.imgContainer}>
                        <FaPen />
                    </div>
                    <div className={Styles.details_inputs}>
                        <div className={Styles.two_input_divs}>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>First Name</label>
                                <input
                                    name="first_name"
                                    type="text"
                                    required
                                    value={form.first_name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>Last Name </label>
                                <input
                                    name="last_name"
                                    type="text"
                                    required
                                    value={form.last_name}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>Date of Birth</label>
                                <input
                                    name="date_of_birth"
                                    type="date"
                                    required
                                    value={form.date_of_birth}
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
                                name="phone_no"
                                type="number"
                                required
                                value={form.phone_no}
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
                    <div style={{ display: 'grid', gridTemplateColumns: '50% auto', gap: '2em' }}>


                        <div className={Styles.input_item}>
                            <label className={pt_sans.className} >Blood Group</label>
                            <select
                                name="blood_group"
                                placeholder="Blood Group"
                                onChange={(event) => {
                                    setForm((prev) =>
                                        ({ ...prev, blood_group: event.target.value }));
                                }}>
                                <option
                                    value=""
                                    disabled
                                    defaultValue={"Select your option"}
                                >select option</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">AB</option>
                                <option value="O">O</option>
                            </select>
                        </div>
                        <div className={Styles.input_item}>

                            <label className={pt_sans.className} >Sex</label>
                            <select
                                name="sex"
                                placeholder="Sex"
                                value={form.sex}
                                onChange={(event) => {
                                    setForm((prev) =>
                                        ({ ...prev, sex: event.target.value }));
                                }}>
                                <option
                                    value=""
                                    disabled
                                    defaultValue={"Select your option"}
                                >select option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '50% auto', gap: '2em' }}>
                        <div className={Styles.input_item}>
                            <label className={pt_sans.className} >Weight</label>
                            <input name="weight"
                                type="number"
                                required
                                value={form.weight}
                                onChange={onChange} />
                            <p className={pt_sans.className} style={{ color: '#003963', position: 'absolute', marginTop: '2em', right: '0.5em' }}>kg</p>
                        </div>
                        <div className={Styles.input_item}>
                            <label className={pt_sans.className} >Height</label>
                            <input
                                name="height"
                                type="number"
                                required
                                value={form.height}
                                onChange={onChange}
                            />
                            <p className={pt_sans.className} style={{ color: '#003963', position: 'absolute', marginTop: '2em', right: '0.5em' }}>in</p>
                        </div>
                    </div>
                    <div className={Styles.textArea_container}>
                        <label className={pt_sans.className}>Additional Info</label>
                        <textarea
                            name='additional_info'
                            className={Styles.textarea}
                            placeholder="Additional Information e.g Allergies"
                            type='text'
                            value={form.additional_info}
                            onChange={onChange} />
                    </div>

                    {disabled ? <input
                        value='edit profile'
                        disabled
                        className={Styles.button}
                    /> : <input
                        value='save'
                        type='submit'
                        className={Styles.button}
                    />}
                </section>
            </form>
        </>


    );
}