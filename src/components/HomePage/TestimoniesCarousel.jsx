import HomepageStyles from '@/styles/HomePage.module.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { delay } from 'framer-motion';
import Image from 'next/image';
SwiperCore.use([Autoplay]);

function TestimoniesCarousel() {
	const pagination = {
		el: '.image3-swiper-pagination',
		clickable: false,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
	};
	return (
		<div className={HomepageStyles.testimoniesSwiperContainer}>
			<Swiper
				modules={[Navigation, Pagination]}
				pagination={pagination}
				direction={'horizontal'}
				autoplay={{ delay: 6000 }}
				spaceBetween={30}
				// grabCursor={true}
				wrapperClass={HomepageStyles.testimoniesCarousel}
				// navigation={{
				// 	nextEl: '.image3-swiper-button-next',
				// 	prevEl: '.image-swiper-button-prev',
				// 	disabledClass: 'swiper-button-disabled',
				// }}
				className={HomepageStyles.swipers}
			>
				<div className={HomepageStyles.hospitalsCarousel}>
					<SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
						<div className={HomepageStyles.testimoniesCarouselImg}>
							<Image
								src='/signInImage.webp'
								height={150}
								width={150}
								alt='careFinderTestimony'
								quality={100}
							/>
						</div>
						<h2>“Excellence!”</h2>
						<p>
							I recently used CareFinder to book an appointment with a
							specialist physician and I must say it was a great experience. The
							platform is very user-friendly and easy to navigate. - Mr. Nelson Mandela
						</p>
					</SwiperSlide>
					<SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
						<div className={HomepageStyles.testimoniesCarouselImg}>
							<Image
								src='/signUpImage.webp'
								height={150}
								width={150}
								alt='careFinderTestimony'
								quality={100}
							/>
						</div>
						<h2>“Efficient”</h2>
						<p>
							I have been using CareFinder for a few months now and I am
							thoroughly impressed with the efficiency and reliability of their
							service. - Dr. Emmanuel ofre
						</p>
					</SwiperSlide>
					<SwiperSlide className={HomepageStyles.testimoniesCarouselItem}>
						<div className={HomepageStyles.testimoniesCarouselImg}>
							<Image
								src='/DrOwen.png'
								height={150}
								width={150}
								alt='careFinderTestimony'
								quality={100}
							/>
						</div>
						<h2>“Ease”</h2>
						<p>
							CareFinder is an excellent platform that has made booking
							appointments with specialist physicians a breeze. The platform is
							very user-friendly and I was able to easily browse through
							different specialties and choose the right doctor for my needs. - Dr. Mamu Levite
						</p>
					</SwiperSlide>
				</div>
			</Swiper>
		</div>
	);
}
export default TestimoniesCarousel;
