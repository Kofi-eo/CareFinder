import ExploreStyles from '@/styles/ExplorePage.module.css'
import { PT_Sans } from "next/font/google";
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Filter () {
    return (
        <div className={ExploreStyles.searchBoxContainer}>
            <div className={ExploreStyles.searchBox}>
            <form action="" className={pt_sans.className}>
                <div className={ExploreStyles.columnInputLocation}>
                    <label htmlFor="City">City</label>
                    <input type="text" placeholder="Enter your city" />
                </div>
                <div className={ExploreStyles.columnInputLocation}>
                    <label htmlFor="City">State</label>
                    <input type="text" placeholder="Enter your state" />
                </div>
                <div className={ExploreStyles.columnInputs}>
                    <label htmlFor="Department">Department</label>{" "}
                    <RiArrowDownSLine className={ExploreStyles.selectArrow} />
                    <select name="Department" id="Department" placeholder="gg">
                        <option
                        value=""
                        disabled
                        defaultValue={"Select your option"}
                        ></option>
                        <option value="">General</option>
                        <option value="">Private</option>
                    </select>
                </div>
                <div className={ExploreStyles.columnInputs}>
                    <label htmlFor="Time">Schedule Time</label>
                    <GoCalendar className={ExploreStyles.calender} />
                    <input type="text" placeholder="4 / 03 /2023" />
                </div>
                <button>Filter</button>
            </form>
            </div>
        </div>
    )
}