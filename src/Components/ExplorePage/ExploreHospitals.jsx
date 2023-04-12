import ExploreStyles from '@/styles/ExplorePage.module.css'
import HospitalCard from "./HospitalCard";

export default function ExploreHospital() {
    return (
        <div className={ExploreStyles.explore_grid}>
            <HospitalCard />
            <HospitalCard />
            <HospitalCard />
            <HospitalCard />
            <HospitalCard />
            <HospitalCard />
        </div>
    )
}