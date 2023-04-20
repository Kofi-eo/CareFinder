import ExploreStyles from '@/styles/ExplorePage.module.css';
<<<<<<< HEAD
import { PT_Sans } from "next/font/google";
import { GoCalendar } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
=======
>>>>>>> origin/main

import { GoSearch } from 'react-icons/go';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go';
import { DatePicker } from '@mui/x-date-pickers';

export default function Filter() {
<<<<<<< HEAD
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
    );
}
=======
	const xfilter = () => {
		return 0;
	};
	return (
		//
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '70px',
			}}
		>
			<form onSubmit={xfilter} className='filter-form'>
				<input type='text' placeholder='City' />
				<input type='text' placeholder='State' />

				<select placeholder='Department'>
					<option value='text' data-placeholder='Department 1'>
						Select A Department
					</option>
				</select>

				<DatePicker className='date-picker' />

				<button>Filter</button>
				<button>Reset</button>
			</form>
		</div>
	);
}
>>>>>>> origin/main
