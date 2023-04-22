import ExploreStyles from '@/styles/ExplorePage.module.css';

import { GoSearch } from 'react-icons/go';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go';
import { departmentsData } from '@/data/departmentsData';
import { StateData } from '@/data/locationData';

export default function Filter() {
	const xfilter = () => {
		return 0;
	};
	return (
		//
		<div className='filter-container'>
			<form onSubmit={xfilter} className='filter-form'>
				<input type='text' placeholder='Area' />
				<select placeholder='State'>
					<option value='text' data-placeholder='State 1'>
						Select A State
					</option>
					{StateData.map((x, index) => (
						<option
							value={x}
							data-placeholder={`State ${index + 1}`}
							key={index}
						>
							{x}
						</option>
					))}
				</select>

				<select placeholder='Department'>
					<option value='text' data-placeholder='Department 1'>
						Select A Department
					</option>
					{departmentsData.map((x, index) => (
						<option
							value={x}
							data-placeholder={`Department ${index + 1}`}
							key={index}
						>
							{x}
						</option>
					))}
				</select>

				<input type='datetime-local' />

				<button>Filter</button>
				<button>Reset</button>
			</form>
		</div>
	);
}
