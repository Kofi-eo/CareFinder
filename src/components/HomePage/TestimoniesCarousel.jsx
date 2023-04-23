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
						<h2>“Great Experience with CareFinder!”</h2>
						<p>
							I recently used CareFinder to book an appointment with a
							specialist physician and I must say it was a great experience. The
							platform is very user-friendly and easy to navigate. The entire
							process was hassle-free and I would definitely recommend
							CareFinder to anyone looking for a convenient way to book
							appointments with specialist physicians. - Mr. Nelson Mandela
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
						<h2>“Efficient and Reliable Service”</h2>
						<p>
							I have been using CareFinder for a few months now and I am
							thoroughly impressed with the efficiency and reliability of their
							service. The platform is very intuitive and user-friendly. The
							entire process is seamless and I highly recommend CareFinder to
							anyone looking for a reliable and efficient way to book
							appointments with specialist physicians. - Dr. Emmanuel ofre
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
						<h2>“Highly Recommended!”</h2>
						<p>
							CareFinder is an excellent platform that has made booking
							appointments with specialist physicians a breeze. The platform is
							very user-friendly and I was able to easily browse through
							different specialties and choose the right doctor for my needs.
							Overall, I would highly recommend CareFinder to anyone looking for
							a convenient and hassle-free way to book appointments with
							specialist physicians. - Dr. Mamu Levite
						</p>
					</SwiperSlide>
				</div>
			</Swiper>
		</div>
	);
}
export default TestimoniesCarousel;
