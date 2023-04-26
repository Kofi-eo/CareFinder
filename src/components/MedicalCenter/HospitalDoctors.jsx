import DoctorsCard from './DoctorsCard';
import Styles from '@/styles/MedicalCenter.module.css';
import { Lexend } from 'next/font/google';
import { PT_Sans } from 'next/font/google';
import { SpecialistData } from '@/data/specialistsData';
import { useState } from 'react';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '800'] });
const pt_sans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function HospitalDoctors({ data, showModal, setShowModal }) {
	const {
		id,
		departments
	} = data || {};

	const specialistData = SpecialistData.filter(
		(item) => item.medicalCenterId === id
	);

	const [selectedDepartment, setSelectedDepartment] = useState('default');

	const filteredSpecialistData = specialistData.filter((item) => {
		if (selectedDepartment === 'default') {
			return true;
		} else {
			return item.department === selectedDepartment;
		}
	});

	return (
		<div className={Styles.hospital_doctors}>
			<div className={Styles.filter_bar}>
				<div className={Styles.filter_item}>
					<label className={pt_sans.className}>Sort By</label>
					<select name='Department' id='Department' placeholder=''>
						<option
							value=''
							disabled
							defaultValue={'Select your option'}
						></option>
						<option value=''>General</option>
						<option value=''>Name</option>
						<option value=''>Time</option>
					</select>
				</div>

				<div className={Styles.filter_item}>
					<label className={pt_sans.className}>Department</label>
					<select
						name='Department'
						id='Department'
						placeholder=''
						onChange={(e) => setSelectedDepartment(e.target.value)}
					>
						<option value={'default'} defaultValue={true}>
							select a department
						</option>
						{departments &&
							departments.map((x, index) => (
								<option key={index} value={x}>
									{x}
								</option>
							))}
					</select>
				</div>
			</div>

			<div className={Styles.doctorsCard_container}>
				{filteredSpecialistData &&
					filteredSpecialistData.map((x, index) => (
						<DoctorsCard
							key={index}
							data={x}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					))}
			</div>
		</div>
	);
}
