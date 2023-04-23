import ExploreStyles from '@/styles/ExplorePage.module.css';
import MedicalCentreCard from '../Cards/MedicalCentreCard';
import { MedicalCentreData } from '@/data/medicalCentres';
import { useContext } from 'react';
import { filterContext } from '@/Context/filterCentres';

export default function ExploreHospital() {
	const { filter, setFilter } = useContext(filterContext);

	const { area, department, state } = filter;

	if (!area && !department && !state) {
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

	const medicalcentres = MedicalCentreData.filter((x) => {
		return (
			filter.area &&
			filter.state &&
			filter.department &&
			x.location.includes(filter.area) &&
			x.location.includes(filter.state) &&
			x.departments.includes(filter.department)
		);
	});
	console.log(filter);
	return (
		<div className={ExploreStyles.explore_grid}>
			{medicalcentres.map((x, index) => (
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
