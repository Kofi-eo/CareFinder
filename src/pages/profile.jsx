import { useState } from 'react';
import Styles from '@/styles/ProfilePage.module.css';
import NavBar from '@/components/HomePage/NavBar';
import Head from 'next/head';
import { FaHistory } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { Lexend } from 'next/font/google';
import { PT_Sans } from 'next/font/google';
import EditProfile from '@/components/ProfilePage/EditProfile';
import AppointmentHistory from '@/components/ProfilePage/AppointHistory';
import PasswordSecurity from '@/components/ProfilePage/PasswordSecurity';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '800'] });
const pt_sans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function Profile(props) {
	const displayArray = ['editProfile', 'appointHistory', 'passwordSecurity'];
	const [display, setDisplay] = useState('');

	function switchDisplay(newSection) {
		setDisplay(newSection);
	}

	function displayWhat() {
		if (display == '' || display == displayArray[0]) {
			return <EditProfile />;
		} else if (display == displayArray[1]) {
			return <AppointmentHistory history={props.appointmentHistory}/>;
		} else {
			return <PasswordSecurity />;
		}
	}

	return (
		<>
			<Head>
				<title>Care Finder Profile</title>
				<meta name='description' content='Welcome to your profile' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar returnBack={true} />
			<div className={Styles.pageContainer}>
				<div className={Styles.features}>
					<p
						onClick={() => switchDisplay(displayArray[0])}
						className={pt_sans.className}
					>
						<FaPen /> <span>Edit Profile</span>
					</p>
					<p
						onClick={() => switchDisplay(displayArray[1])}
						className={pt_sans.className}
					>
						<FaHistory /> <span>Appoint History</span>
					</p>
					<p
						onClick={() => switchDisplay(displayArray[2])}
						className={pt_sans.className}
					>
						<FaLock /> <span>Password & Security</span>
					</p>
				</div>
				<div className={Styles.details_section}>{displayWhat()}</div>
			</div>
		</>
	);
}
