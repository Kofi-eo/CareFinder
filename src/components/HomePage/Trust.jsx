import HomepageStyles from '@/styles/HomePage.module.css';
import Image from 'next/image';

function Trust() {
	return (
		<div className={HomepageStyles.trustContainer}>
			<h1>Trusted By over 300+ Medical Centres</h1>
			<div className={HomepageStyles.trustLogos}>
				<Image
					src='/mLogo-02.svg'
					alt='carefinder partner'
					width={20}
					height={150}
				/>
				<Image
					src='/mLogo-03.svg'
					alt='carefinder partner'
					width={300}
					height={150}
				/>
				<Image
					src='/mLogo-04.svg'
					alt='carefinder partner'
					width={300}
					height={150}
				/>
				<Image
					src='/mLogo-05.svg'
					alt='carefinder partner'
					width={300}
					height={150}
				/>
				<Image
					src='/mLogo-06.svg'
					alt='carefinder partner'
					width={300}
					height={150}
				/>
			</div>
		</div>
	);
}

export default Trust;
