import HomepageStyles from '@/styles/HomePage.module.css';
import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import HospitalsCarousel from './HospitalsCarousel';

function HospitalsNear() {
  return (
    <div className={HomepageStyles.hospitalsNearContainer}>
      <div className={HomepageStyles.hospitalsNearText}>
        <h1>Hospitals Near You</h1>
        <div className={HomepageStyles.hospitalsNearArrBtns}>
          <div className={HomepageStyles.arrowContainer}>
            <RiArrowLeftLine className='image-swiper-button-prev' />
          </div>
          <div className='image-swiper-pagination'></div>
          <div className={HomepageStyles.arrowContainer}>
            <RiArrowRightLine className='image-swiper-button-next' />
          </div>
        </div>
      </div>
      <HospitalsCarousel />
      <div className={HomepageStyles.hospitalsNearViewButton}>
        <Link href=''>
          <button className='Primary-Button'>View All</button>
        </Link>
      </div>
    </div>
  );
}

export default HospitalsNear;
