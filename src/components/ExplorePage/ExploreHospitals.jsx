import ExploreStyles from '@/styles/ExplorePage.module.css';
import MedicalCentreCard from '../Cards/MedicalCentreCard';
import { MedicalCentreData } from '@/data/medicalCentres';

export default function ExploreHospital() {
	// const medicalCentres = MedicalCentreData.filter((x) => x.)

	return (
		<div className={ExploreStyles.explore_grid}>
			{MedicalCentreData.map((x, index) => (
				<MedicalCentreCard
					key={index}
					details={x}
					width={280}
					height={280}
					shadow
				/>
			))}
		</div>
	);
}
