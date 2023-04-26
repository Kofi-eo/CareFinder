import Styles from "@/styles/ProfilePage.module.css";
import { PT_Sans } from "next/font/google";
import { useState } from "react";
import {FaHistory} from "react-icons/fa"
import {FaLock} from "react-icons/fa"
import {FaPen } from "react-icons/fa"


const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function EditProfile() {
    const [formDetaiils, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phoneNumber: '',
        address: '',
        sex: '',
        bloodGroup: '',
        height: '',
        weight: '',
        additionalInfo: ''
    }) 

    // update form Details
    function updateState(e, key) {
        setFormDetails(prevState => ({...prevState, [key]: e.target.value}))
    }

    console.log(formDetaiils)

    return (
        <>
            <div className={Styles.details_container}>
                <div className={Styles.imgContainer}>
                    <FaPen />                            
                </div>
                <div className={Styles.details_inputs}>
                    <div className={Styles.two_input_divs}>
                        <div className={Styles.input_item}>
                            <label className={pt_sans.className} >Name</label>
                            <input value={formDetaiils.firstName} onChange={(e) =>updateState(e, 'firstName') } type="text" placeholder="First Name"/>
                        </div>
                        <div className={Styles.input_item}>
                            <label className={pt_sans.className}> &zwnj; </label>
                            <input value={formDetaiils.lastName} onChange={(e) =>updateState(e, 'lastName') } type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div style={{display: 'flex' }}>
                        <div className={Styles.input_item}>
                            <label className={pt_sans.className}>Date of Birth</label>
                            <input type="date" value={formDetaiils.dateOfBirth} onChange={(e) =>updateState(e, 'dateOfBirth') }/>
                        </div>
                        <div></div>
                    </div>
                    <div className={Styles.input_item}>
                        <label className={pt_sans.className}>Email Address</label>
                        <input type={'email'} placeholder="name@gmail.com" value={formDetaiils.email} onChange={(e) =>updateState(e, 'email') } />
                    </div>
                    <div className={Styles.input_item} id='number_input_container'>
                        <span className={Styles.numberText}>+234 </span>
                        <label className={pt_sans.className}>Phone Number</label>
                        <input type={'number'} value={formDetaiils.phoneNumber} onChange={(e) =>updateState(e, 'phoneNumber') }/>
                    </div>
                    <div className={Styles.input_item}>
                        <label className={pt_sans.className}>Address</label>
                        <input type={'text'} value={formDetaiils.address} onChange={(e) =>updateState(e, 'address') } />
                    </div>
                </div>
            </div>

            <div className={Styles.bottom_section}>
                <hr className={Styles.hr}/>
                <div style={{display: 'grid', gridTemplateColumns: '30% auto', gap: '2em'}}>
                    <div className={Styles.input_item}>
                        <label className={pt_sans.className} >Boold Group</label>
                        <select name="blood-group" placeholder="Blood Group" value={formDetaiils.bloodGroup} onChange={(e) =>updateState(e, 'bloodGroup')} >
                            <option
                                value=""
                                disabled
                                defaultValue={"Select your option"}
                            >Blood Group</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                        </select>
                    </div>
                    <div className={Styles.input_item}>
                        <label className={pt_sans.className} >Sex</label>
                        <select name="blood-group" placeholder="Sex" value={formDetaiils.sex} onChange={(e) =>updateState(e, 'sex') }>
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
                <div style={{display: 'grid', gridTemplateColumns: '30% auto', gap: '2em'}}>
                    <div className={Styles.input_item}>
                        <label className={pt_sans.className} >Height</label>
                        <input type="text" placeholder="height" value={formDetaiils.height} onChange={(e) =>updateState(e, 'height') } />
                        <p className={pt_sans.className} style={{color: '#003963', position: 'absolute', marginTop: '2em' , right: '0.5em'}}>lbs</p>
                    </div>
                    <div className={Styles.input_item}>
                        <label className={pt_sans.className} >Weight</label>
                        <input type="text" placeholder="Height" value={formDetaiils.weight} onChange={(e) =>updateState(e, 'weight') } />
                        <p className={pt_sans.className} style={{color: '#003963', position: 'absolute', marginTop: '2em' , right: '0.5em'}}>in</p>
                    </div>
                </div>
                <div className={Styles.textArea_container}>
                    <label className={pt_sans.className}>Additional Info</label>
                    <textarea className={Styles.textarea} placeholder="Additional Information e.g Allergies" type='text' value={formDetaiils.additionalInfo} onChange={(e) =>updateState(e, 'additionalInfo') }/> 
                </div>

                <button className={Styles.button}>Save</button>
            </div>
        </>


    )
}
