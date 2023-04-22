import HomepageStyles from '@/styles/HomePage.module.css';
import PharmaciesCarousel from './PharmaciesCarousel';

import { RiArrowRightLine } from 'react-icons/ri';
import { RiArrowLeftLine } from 'react-icons/ri';
import { RxDotFilled } from 'react-icons/rx';
import Link from 'next/link';

function PharmaciesNear() {
	return (
		<>
			<hr className={HomepageStyles.hospitalsNearDivider} />
			<div className={HomepageStyles.hospitalsNearContainer}>
				<div className={HomepageStyles.hospitalsNearText}>
					<h1>Pharmacies Near You</h1>
					<div className={HomepageStyles.hospitalsNearArrBtns}>
						<div className={HomepageStyles.arrowContainer}>
							<RiArrowLeftLine className='image2-swiper-button-prev' />
						</div>
						<div className='image-swiper-pagination'></div>
						<div className={HomepageStyles.arrowContainer}>
							<RiArrowRightLine className='image2-swiper-button-next' />
						</div>
					</div>
				</div>
				<PharmaciesCarousel />
				<div className={HomepageStyles.hospitalsNearViewButton}>
					<Link href='/Explore'>
						<button className='Primary-Button'>View All</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default PharmaciesNear;
