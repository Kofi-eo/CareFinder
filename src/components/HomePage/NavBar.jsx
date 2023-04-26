import HomepageStyles from '@/styles/HomePage.module.css';

import { signOut } from 'firebase/auth';

import Image from 'next/image';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { IoClose } from 'react-icons/io5';

import { RiMenu4Fill } from 'react-icons/ri';

import { auth } from '../../Firebase/firebase.config';

import { useAuth } from '../../pages/_app';

function NavBar({ returnBack = false }) {
	const { user } = useAuth();

	const [nav, setNav] = useState({
		width: '90vw',

		marginTop: '120px',

		position: 'absolute',
	});

	const [mobnav, setMobnav] = useState(false);

	const showMobile = () => setMobnav(!mobnav);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 300) {
				setNav({
					width: '100vw',

					marginTop: '70px',

					position: 'fixed',
				});
			} else {
				setNav({
					width: '90vw',

					marginTop: '120px',

					position: 'absolute',
				});
			}
		}


		if (returnBack) { // To return Navbar back to full width on page mount
			setNav({
				width: '100vw',

				marginTop: '70px',
			});
		} else {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [returnBack]);

	return (
		<div>
			<div className={HomepageStyles.centerNav}>
				<nav id='nav' className={HomepageStyles.nav} style={nav}>
					<Link href='/'>
						<Image
							src='/Logo-Black.svg'
							alt='careFinder'
							height={60}
							width={60}
						/>
					</Link>

					<div>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>

							<li>
								<Link href='/Explore'>Explore</Link>
							</li>

							{user && (
								<li>
									<Link href='/profile'>Profile</Link>
								</li>
							)}

							{!user ? (
								<li className={HomepageStyles.loginButton}>
									<Link href='/Auth'>Login/SignUp</Link>
								</li>
							) : (
								<li
									className={HomepageStyles.loginButton}
									onClick={() => signOut(auth)}
								>
									Logout
								</li>
							)}
						</ul>

						<button className={HomepageStyles.navButton} onClick={showMobile}>
							<RiMenu4Fill />
						</button>
					</div>
				</nav>

				<div className={mobnav ? 'navMobile active' : 'navMobile'}>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Image
							src={'/Logo-White.svg'}
							width={150}
							height={30}
							alt='careFinder'
						/>

						<button onClick={showMobile}>
							<IoClose size={30} color='white' />
						</button>
					</div>

					<div className='navMobileMenu'>
						<ul style={{ gap: 20, textDecoration: 'none' }}>
							<li>
								<Link href={'/'}>
									<span onClick={showMobile}>HOME</span>
								</Link>
							</li>

							<li onClick={showMobile}>
								<Link href={'/Explore'}>
									<span onClick={showMobile}>EXPLORE</span>
								</Link>
							</li>

							{user && (
								<li onClick={showMobile}>
									<Link href={'/profile'}>
										<span onClick={showMobile}>PROFILE</span>
									</Link>
								</li>
							)}
						</ul>

						{user ? (
							<span
								style={{ position: 'absolute', bottom: 50, left: 20 }}
								onClick={() => signOut(auth)}
							>
								LOGOUT
							</span>
						) : (
							<span style={{ position: 'absolute', bottom: 50, left: 20 }}>
								<Link href={'/Auth'}>LOG IN</Link>
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
