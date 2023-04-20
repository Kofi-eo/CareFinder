import Image from 'next/image';
import Styles from '@/styles/MedicalCenter.module.css';
import { useEffect, useRef, useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export default function HospitalDetails() {
	const [showMore, setShowMore] = useState(false);
	const [update, setUpdate] = useState(''); // state to store window.innerwidth value after adding event listener
	const hospText = useRef(0);

	const [mobileView, setMobileView] = useState(false);

	function handleShowMore(backNormal = false) {
		if (backNormal) {
			hospText.current.style = 'unset';
			hospText.current.style.position = 'unset';
			hospText.current.style.right = 'unset';
			hospital_text.style.backgroundColor = 'azure';
		} else {
			const hospital_text = document.getElementById('hospital_text');
			const test = document.getElementById('test');

			if (!showMore) {
				test.style.backgroundColor = 'white';
				hospital_text.style.backgroundColor = 'azure';
				hospital_text.style.position = 'absolute';
				hospital_text.style.right = '0';
				hospital_text.style.width = '65vw';
			} else {
				hospital_text.style.position = 'relative';
			}

			setShowMore((prevStata) => !prevStata);
		}
	}

	useEffect(() => {
		if (update == '') {
			window.addEventListener('resize', () => {
				setUpdate(window.innerWidth);
			});
		}

		const checkSize = window.innerWidth <= 720 ? true : false;
		setMobileView(checkSize);

		// removing the event listener on component un-mount
		return () => {
			window.removeEventListener('resize', () => {
				console.log('removed');
			});
		};
	}, [update]);

	return (
		<div id='test' className={Styles.hospital_details}>
			<Image id='hospital_image' src={'/DrOwen.png'} height={100} width={100} />
			<div id='hospital_text' ref={hospText} className={Styles.details_text}>
				<h3> Kelina Hospital </h3>
				<p style={{ fontWeight: 'bolder' }}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						style={{ fill: 'rgba(0, 0, 0, 1)' }}
					>
						<path d='M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z'></path>
						<path d='M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z'></path>
					</svg>{' '}
					<span>9, beside Access Bank, Abuja, Nigeria </span>
				</p>
				<p style={{ fontWeight: 'bolder' }}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 24 24'
						style={{ fill: 'rgba(0, 0, 0, 1)' }}
					>
						<path d='m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z'></path>
					</svg>{' '}
					<span> +234 250 00 000 </span>
				</p>

				{mobileView && !showMore ? (
					<h4
						onClick={() => handleShowMore()}
						style={{
							cursor: 'pointer',
							fontSize: '0.9em',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Show more <RiArrowDownSFill />{' '}
					</h4>
				) : (
					<></>
				)}

				{mobileView ? (
					showMore ? (
						<>
							<hr />
							<p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									style={{ fill: 'rgba(0, 0, 0, 1)' }}
								>
									<path d='M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z'></path>
									<path d='M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z'></path>
								</svg>{' '}
								Hospital
							</p>
							<p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									style={{ fill: 'rgba(0, 0, 0, 1)' }}
								>
									<path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
								</svg>{' '}
								13 Specialist Available
							</p>
							<hr />
							<p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
									style={{ fill: 'rgba(0, 0, 0, 1)' }}
								>
									<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'></path>
									<path d='M13 7h-2v6h6v-2h-4z'></path>
								</svg>{' '}
								Mon - Fri : 7am - 6pm
							</p>
							<p>Saturday : 7am - 1pm</p>
							<br />
							<br />
							<p
								style={{
									fontWeight: 'bolder',
									cursor: 'pointer',
									fontSize: '0.9em',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
								onClick={() => handleShowMore()}
							>
								Show Less <RiArrowUpSFill />
							</p>
						</>
					) : (
						<></>
					)
				) : (
					<>
						<hr />
						<p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								style={{ fill: 'rgba(0, 0, 0, 1)' }}
							>
								<path d='M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z'></path>
								<path d='M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z'></path>
							</svg>{' '}
							Hospital
						</p>
						<p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								style={{ fill: 'rgba(0, 0, 0, 1)' }}
							>
								<path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
							</svg>{' '}
							13 Specialist Available
						</p>
						<hr />
						<p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								style={{ fill: 'rgba(0, 0, 0, 1)' }}
							>
								<path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z'></path>
								<path d='M13 7h-2v6h6v-2h-4z'></path>
							</svg>{' '}
							Mon - Fri : 7am - 6pm
						</p>
						<p>Saturday : 7am - 1pm</p>
						<br />
						<br />
						{typeof hospText.current.style !== 'undefined' &&
							handleShowMore(true)}
					</>
				)}
			</div>
		</div>
	);
}
