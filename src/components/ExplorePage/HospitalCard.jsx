import { Lexend } from 'next/font/google';
import { PT_Sans } from 'next/font/google';
import ExploreStyles from '@/styles/ExplorePage.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '800'] });
const pt_sans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function HospitalCard() {
	const route = useRouter();

	return (
		<div
			onClick={() => route.push(`/medical_center/${2}`)}
			className={ExploreStyles.explore_item}
		>
			<div className={ExploreStyles.explore_item_imgContainer}>
				<Image
					src={'/DrOwen.png'}
					height={100}
					width={100}
					alt='careFinder Hospital'
				/>
				<span>12 Specialist Available</span>
			</div>
			<div className={ExploreStyles.explore_item_texts}>
				<h3
					className={lexend.className}
					style={{ display: 'flex', alignItems: 'center' }}
				>
					Kelina Hospital{' '}
					<span
						style={{ display: 'flex', marginLeft: 'auto', fontSize: '0.8em' }}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='15'
							height='15'
							viewBox='0 0 24 24'
							style={{ fill: 'rgba(0, 0, 0, 1)' }}
						>
							<path d='M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z'></path>
							<path d='M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z'></path>
						</svg>{' '}
						5.5km
					</span>
				</h3>
				<p className={pt_sans.className}>
					9, beside Access Bank, Abuja, Nigeria
				</p>
			</div>
		</div>
	);
}
