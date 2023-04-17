import HomepageStyles from '@/styles/HomePage.module.css';
import { RiArrowLeftLine } from 'react-icons/ri';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { MdPeopleOutline } from 'react-icons/md';
import Image from 'next/image';

function InfoSection() {
	return (
		<div className={HomepageStyles.infoSectionContainer}>
			<div className={HomepageStyles.infoSection}>
				<div className={HomepageStyles.imgAndIcon}>
					<Image src='/Time.png' height={250} width={250} alt='' />
					<div className={HomepageStyles.infoIcons}>
						<MdOutlinePhoneIphone />
					</div>
				</div>
				<h1>Convenient</h1>
				<p>
					Book appointments with specialist physicians from the comfort of their
					own homes
				</p>
			</div>
			<div className={HomepageStyles.infoSection}>
				<div className={HomepageStyles.imgAndIcon}>
					<Image src='/Fill.png' height={150} width={150} alt='' />
					<div className={HomepageStyles.infoIcons}>
						<BiTimeFive />
					</div>
				</div>
				<h1>Time-Saving</h1>
				<p>
					Save Time and Hassle with Our System for Booking Appointments with
					Specialist Physicians
				</p>
			</div>
			<div className={HomepageStyles.infoSection}>
				<div className={HomepageStyles.imgAndIcon}>
					<img src='/Doctors.png' alt='' />
					<div className={HomepageStyles.infoIcons}>
						<MdPeopleOutline />
					</div>
				</div>
				<h1>Access</h1>
				<p>
					Gain access to top-rated specialist physicians who are experts in
					their fields
				</p>
			</div>
		</div>
	);
}

export default InfoSection;
