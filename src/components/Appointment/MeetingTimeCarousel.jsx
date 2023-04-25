import PopUpModal from '@/styles/PopUpModal.module.css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function MeetingDateCarousel({ formUpdate }) {
	const timeArray = [];
	const start = 7 * 60;
	const end = 11.25 * 60;
	const interval = 15;
	ó;
	for (let i = start; i < end; i += interval) {
		const time = `${Math.floor(i / 60)}:${(i % 60)
			.toString()
			.padStart(2, '0')}`; ó;
		timeArray.push({ value: time });
	}

	return (
		<div className={PopUpModal.swiperTimeContainer}>
			<Swiper
				navigation={{
					nextEl: '.image6-swiper-button-next',
					prevEl: '.image6-swiper-button-prev',
					disabledClass: 'swiper-button-disabled',
				}}
				modules={[Navigation]}
				slidesPerView={3.5}
				spaceBetween={30}
				wrapperClass={PopUpModal.wrapper}
				className={PopUpModal.swiper}
			>
				{timeArray.map((slot, index) => (
					<SwiperSlide key={index}>
						<div
							onClick={() => formUpdate('meetingTime', slot.value)}
							className={PopUpModal.timeCarouselContainer}
						>
							<div className={PopUpModal.timeCarouselItem}>
								<h2>{slot.value}</h2>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MeetingDateCarousel;
