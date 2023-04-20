import HomepageStyles from '@/styles/HomePage.module.css';
import SearchBox from './SearchBox';

function Header() {
	return (
		<div className={HomepageStyles.headerContainer}>
			<header>
				<div className={HomepageStyles.headerText}>
					<h1>Effortless Medical Assistance</h1>
					<p>
						Easily schedule appointments with expert medical specialists near
						you, at a time and place that suits you best.
					</p>
					<div className={HomepageStyles.heroButtonsContainer}>
						<button className='Primary-Button'>Get Started</button>
						<button className='Secondary-Button'>Learn More</button>
					</div>
				</div>
				<div className={HomepageStyles.headerImage}> </div>
			</header>
		</div>
	);
}

export default Header;
