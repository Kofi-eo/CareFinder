import { useState } from "react"
import Styles from "@/styles/ProfilePage.module.css";
import NavBar from "@/Components/HomePage/NavBar";
import Head from "next/head";
import {FaHistory} from "react-icons/fa"
import {FaLock} from "react-icons/fa"
import {FaPen } from "react-icons/fa"
import { Lexend } from "next/font/google";
import { PT_Sans } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "800"] });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Profile() {
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
            <NavBar returnBack={true}/>
            <div className={Styles.pageContainer}>
                <div className={Styles.features}>
                    <p className={pt_sans.className}><FaPen />  <span>Edit Profile</span></p>
                    <p className={pt_sans.className}><FaHistory />  <span>Appoint History</span></p>
                    <p className={pt_sans.className}><FaLock /> <span>Password & Security</span></p>
                </div>
                <div className={Styles.details_section}>
                    <div className={Styles.details_container}>
                        <div className={Styles.imgContainer}>
                            <FaPen />                            
                        </div>
                        <div className={Styles.details_inputs}>
                            <div className={Styles.two_input_divs}>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className} >Name</label>
                                    <input type="text"/>
                                </div>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className}> &zwnj; </label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div style={{display: 'flex' }}>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className}>Date of Birth</label>
                                    <input type="text"/>
                                </div>
                                <div></div>
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>Email Address</label>
                                <input type={'email'} />
                            </div>
                            <div className={Styles.input_item} id='number_input_container'>
                                <span className={Styles.numberText}>+234 </span>
                                <label className={pt_sans.className}>Phone Number</label>
                                <input type={'number'} />
                            </div>
                            <div className={Styles.input_item}>
                                <label className={pt_sans.className}>Address</label>
                                <input type={'text'} />
                            </div>
                        </div>
                    </div>

                    <div className={Styles.bottom_section}>
                            <hr className={Styles.hr}/>
                            <div style={{display: 'grid', gridTemplateColumns: '30% auto', gap: '2em'}}>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className} >Name</label>
                                    <select name="blood-group" placeholder="Blood Group">
                                        {/* <option
                                            value=""
                                            disabled
                                            defaultValue={"Select your option"}
                                        >select option</option> */}
                                        <option disabled>select Blood group</option>
                                        <option value="">A</option>
                                        <option value="">B</option>
                                        <option value="">AB</option>
                                        <option value="">0</option>
                                    </select>
                                </div>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className} >Name</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div style={{display: 'grid', gridTemplateColumns: '30% auto', gap: '2em'}}>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className} >Name</label>
                                    <input type="text"/>
                                </div>
                                <div className={Styles.input_item}>
                                    <label className={pt_sans.className} >Name</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className={Styles.textArea_container}>
                                <label className={pt_sans.className}>Name</label>
                                <textarea className={Styles.textarea} type='text'/> 
                            </div>

                            <button className={Styles.button}>Save</button>
                        </div>

                </div>
            </div>

        </>
    )
}
