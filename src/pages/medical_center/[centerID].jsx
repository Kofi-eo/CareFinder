import NavBar from '@/components/HomePage/NavBar';
import Footer from '@/components/HomePage/Footer';
import Head from 'next/head';
import HospitalDetails from '@/components/MedicalCenter/HospitalDetails';
import HospitalDoctors from '@/components/MedicalCenter/HospitalDoctors';
import Styles from '@/styles/MedicalCenter.module.css';
import { useEffect, useState } from 'react';
import PopUpModal from '@/components/Appointment/PopUpModal';
import { MedicalCentreData } from '@/data/medicalCentres';
import { useRouter } from 'next/router';

export default function MedicalCentre({setAppointment}) {
	// Testing modal with nav component
	const [showModal, setShowModal] = useState(false);
	const route = useRouter();
	const centerID = route.query.centerID;

	const currentData = MedicalCentreData.filter((item) => item.id === centerID);

	useEffect(() => {
		if (showModal) {
			const main = document.querySelector('html');
			main.style.overflowY = 'hidden';
		} else {
			const main = document.querySelector('html');
			main.style.overflowY = 'scroll';
		}
		console.log(showModal);
	}, [showModal]);
	return (
		<>
			<Head>
				<title>Care Finder Explore</title>
				<meta
					name='description'
					content='Easily schedule appointments with expert medical specialists near you, at a time and place that suits you best.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{showModal ? (
				<PopUpModal setAppointment={setAppointment} showModal={showModal} setShowModal={setShowModal} />
			) : (
				''
			)}
			<NavBar returnBack={true} />
			<div className={Styles.medical_center}>
				<div className={Styles.grid_container}>
					<HospitalDetails data={currentData[0]} />
					<HospitalDoctors
						data={currentData[0]}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
				</div>
			</div>
		</>
	);
}
