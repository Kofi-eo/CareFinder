import HomepageStyles from "@/styles/HomePage.module.css";
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";

function SearchBox() {
  return (
    <div className={HomepageStyles.searchBoxContainer}>
      <div className={HomepageStyles.searchBox}>
        <form action="">
          <div className={HomepageStyles.columnInputLocation}>
            <label htmlFor="City">Location</label>
            <input type="text" placeholder="City" />
          </div>
          <div className={HomepageStyles.columnInputs}>
            <label htmlFor="Department">Department</label>{" "}
            <RiArrowDownSLine className={HomepageStyles.selectArrow} />
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
          <div className={HomepageStyles.columnInputs}>
            <label htmlFor="Time">Schedule Time</label>
            <GoCalendar className={HomepageStyles.calender} />
            <input type="text" placeholder="4/10/2023" />
            {/* <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            /> */}
          </div>
          <button className={HomepageStyles.searchButton}>
            <GoSearch /> Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
