import HomepageStyles from '@/styles/HomePage.module.css';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import Image from 'next/image';

function InfoSectionTwo() {
	return (
		<div className={HomepageStyles.infoSectionTwoContainer}>
			<div className={HomepageStyles.infoSectionTwoImage}>
				<Image
					src='/appointment.webp'
					height={300}
					width={500}
					alt='careFinder Appointment'
				/>
				<div className={HomepageStyles.drOwenText}>
					<h3>Dr. Florence Owen</h3>
					<p>Dietician</p>
				</div>
				<div className={HomepageStyles.drOwenStars}>
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
				</div>
			</div>
			<div className={HomepageStyles.infoSectionTwoText}>
				<h1>Scheduling Made Easy</h1>
				<p>
					Take Charge of Your Health and Schedule with Ease - Discover Top
					Specialists Near You and Book Appointments at Your Convenience
				</p>
				<Link href='/Explore' className='Primary-Button'>
					<button>Book an Appointment</button>
				</Link>
			</div>
		</div>
	);
}

export default InfoSectionTwo;
