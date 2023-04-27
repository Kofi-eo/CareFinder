import Styles from '@/styles/MedicalCenter.module.css';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { Lexend } from 'next/font/google';
import { PT_Sans } from 'next/font/google';
import { useAuth } from '../../pages/_app';
import { useState } from 'react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '800'] });
const pt_sans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function DoctorsCard({
	setDoctorsName,
	setDisplayError,
	showModal,
	setShowModal,
	data,
}) {
	[showModal, setShowModal] = useState(false);
	const { name, title } = data;
	const { user } = useAuth();

	return (
		<div className={Styles.doctor_card}>
			<Image
				src={'/Doctor1.webp'}
				height={110}
				width={110}
				alt='careFinder Doctor'
			/>
			<h3 className={lexend.className}>{name}</h3>
			<p className={pt_sans.className}>{title}</p>
			<div className={Styles.drOwenStars}>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
			<p className={pt_sans.className} style={{ fontWeight: 'bolder' }}>
				Next Available Appointment
			</p>
			<p className={pt_sans.className}>Wed, 12 March(7:15AM)</p>

			{user ? (
				<button
					style={{ cursor: 'pointer' }}
					onClick={() => {
						setShowModal(true);
						setDoctorsName(name);
					}}
				>
					Book Appointment
				</button>
			) : (
				<button
					style={{ cursor: 'pointer' }}
					onClick={() => setDisplayError(true)}
				>
					Book Appointment
				</button>
			)}
		</div>
	);
}
