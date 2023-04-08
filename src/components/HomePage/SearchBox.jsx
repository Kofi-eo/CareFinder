import HomepageStyles from "@/styles/HomePage.module.css";
import { PT_Sans } from "next/font/google";
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";

const pt_sans = PT_Sans({ subsets: ["latin"], weight: ["400", "700"] });

function SearchBox() {
  return (
    <div className={HomepageStyles.searchBoxContainer}>
      <div className={HomepageStyles.searchBox}>
        <form action="" className={pt_sans.className}>
          <div className={HomepageStyles.columnInputLocation}>
            <label htmlFor="City">Location</label>
            <input type="text" placeholder="City" />
          </div>
          <div className={HomepageStyles.columnInputs}>
            <label htmlFor="Department">Department</label>{" "}
            <RiArrowDownSLine className={HomepageStyles.selectArrow} />
            <select name="Department" id="Department" placeholder="gg">
              <option value="" disabled selected>
                Select your option
              </option>
              <option value="">General</option>
              <option value="">Private</option>
            </select>
          </div>
          <div className={HomepageStyles.columnInputs}>
            <label htmlFor="Time">Schedule Time</label>
            <GoCalendar className={HomepageStyles.calender} />
            <input type="text" placeholder="4 / 03 /2023" />
          </div>
          <button>
            <GoSearch /> Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
