import ExploreHospital from '@/components/ExplorePage/ExploreHospitals';
import ExploreMaps from '@/components/ExplorePage/ExploreMaps';
import Filter from '@/components/ExplorePage/Filter';
import Footer from '@/components/HomePage/Footer';
import NavBar from '@/components/HomePage/NavBar';
import ExploreStyles from '@/styles/ExplorePage.module.css';
import Head from "next/head";

export default function Explore() {
	return (
		<>
			<Head>
				<title>Care Finder Explore</title>
				<meta
					name='description'
					content='Easily schedule appointments with expert medical specialists near you, at a time and place that suits you best.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar returnBack={true} />
			<div className={ExploreStyles.explorepage}>
				<Filter />
				<div className={ExploreStyles.hospitalmap_container}>
					<ExploreHospital />
					<ExploreMaps />
				</div>
			</div>
			<Footer />
		</>
	);
}
