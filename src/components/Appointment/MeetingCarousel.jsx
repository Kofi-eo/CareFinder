import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, A11y } from 'swiper';
import PopUpModal from '@/styles/PopUpModal.module.css';

function MeetingCarousel({formUpdate}) {
	const dateArray = [];

	for (let i = 0; i < 7; i++) {
		const currentDate = new Date();
		const nextDay = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
		const day = nextDay.toLocaleDateString('en-US', { weekday: 'short' });
		const date = nextDay.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		});
		dateArray.push({ day, date });
	}

	return (
		<div className={PopUpModal.swiperContainer}>
			<Swiper
				navigation={{
					nextEl: '.image5-swiper-button-next',
					prevEl: '.image5-swiper-button-prev',
					disabledClass: 'swiper-button-disabled',
				}}
				modules={[Navigation]}
				slidesPerView={3.5}
				spaceBetween={30}
				wrapperClass={PopUpModal.wrapper}
				className={PopUpModal.swiper}
			>
				{dateArray.map((date, index) => (
					<SwiperSlide key={index}>
						<div onClick={() => formUpdate('meetingDate', `${date.day} ${date.date} `)} className={PopUpModal.dateCarouselContainer}>
							<div className={PopUpModal.dateCarouselItem}>
								<h1>{date.day}</h1>
								<p>
									{date.date} <br /> {date.month} {date.year}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MeetingCarousel;
