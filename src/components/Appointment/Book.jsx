import React from 'react';
import PopUpModal from '@/styles/PopUpModal.module.css';
import { RiHospitalLine } from 'react-icons/ri';
import { MdAccessTime, MdOutlineMeetingRoom } from 'react-icons/md';
import Image from 'next/image';

function Book() {
	return (
		<>
			{/* Doctor Details */}
			<div className={PopUpModal.AppointmentDetails}>
				<h1>Appointment Details</h1>
				<div className={PopUpModal.drDetails}>
					<Image
						src='/Doctor1.webp'
						width={100}
						height={100}
						alt='carefinder Doctor'
					/>
					<div className={PopUpModal.drDetailsText}>
						<h2>Dr. Paul Eneche</h2>
						<h3>Dentist</h3>
						<p>
							<RiHospitalLine style={{ color: 'black', marginRight: '5px' }} />{' '}
							Elina Hospital
						</p>
					</div>
				</div>
			</div>
			{/* Date and Time  */}
			<div className={PopUpModal.AppointmentTime}>
				<div className={PopUpModal.AppointmentTimeText}>
					<p>
						<MdAccessTime
							style={{
								color: 'black',
								marginTop: '-22px',
								fontSize: '25px',
								marginRight: '5px',
							}}
						/>{' '}
						Today, 12 Mar 2023 <br />
						7:15 AM
					</p>
					<p>
						<MdOutlineMeetingRoom
							style={{ color: 'black', fontSize: '25px', marginRight: '5px' }}
						/>{' '}
						In Person
					</p>
				</div>
			</div>
			{/* Patient Email and Contact */}
			<div className={PopUpModal.patientDetails}>
				<form action=''>
					<div className={PopUpModal.patientInput}>
						<label htmlFor='Email'>Email</label>
						<input type='text' placeholder='testingMic12@gmail.com' />
					</div>
					<div className={PopUpModal.patientInput}>
						<label htmlFor='Email'>Phone</label>
						<input type='text' placeholder='+234 0513564' />
					</div>
				</form>
			</div>
		</>
	);
}

export default Book;
