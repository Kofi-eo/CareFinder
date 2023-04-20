import HomepageStyles from '@/styles/HomePage.module.css';

import TestimoniesCarousel from './TestimoniesCarousel';
// import { RiArrowRightLine } from "react-icons/ri";

function Testimonies() {
	return (
		<>
			{/* <hr className={HomepageStyles.hospitalsNearDivider} /> */}
			<div className={HomepageStyles.TestimoniesContainer}>
				<h1>What our beloved clients are saying</h1>
				<TestimoniesCarousel />
				<div className={HomepageStyles.testimoniesPagination}>
					<div className='image3-swiper-pagination'></div>
				</div>
			</div>
		</>
	);
}

export default Testimonies;
