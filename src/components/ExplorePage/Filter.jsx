import ExploreStyles from '@/styles/ExplorePage.module.css';

import { GoSearch } from 'react-icons/go';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go';
import { departmentsData } from '@/data/departmentsData';
import { StateData } from '@/data/locationData';

import { useContext, useState } from 'react';
import { filterContext } from '@/Context/filterCentres';
import { MedicalCentreData } from '@/data/medicalCentres';

export default function Filter() {
	const { filter, setFilter } = useContext(filterContext);

	const [area, setArea] = useState('');
	const [state, setState] = useState('');
	const [department, setDepartment] = useState('');
	const [date, setDate] = useState('');

	const handleAreaChange = (event) => {
		setArea(event.target.value);
	};

	const handleStateChange = (event) => {
		setState(event.target.value);
	};

	const handleDepartmentChange = (event) => {
		setDepartment(event.target.value);
	};

	const handleDateChange = (event) => {
		setDate(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFilter({ area, state, department, date });
		console.table(filter);
	};

	return (
		<div className='filter-container'>
			<form onSubmit={handleSubmit} className='filter-form'>
				<input
					type='text'
					placeholder='Area'
					value={area}
					onChange={handleAreaChange}
				/>
				<select placeholder='State' value={state} onChange={handleStateChange}>
					<option value='' data-placeholder='State 1'>
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

				<select
					placeholder='Department'
					value={department}
					onChange={handleDepartmentChange}
				>
					<option value='' data-placeholder='Department 1'>
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

				<input type='datetime-local' value={date} onChange={handleDateChange} />

				<button type='submit'>Filter</button>
				<button type='reset'>Reset</button>
			</form>
		</div>
	);
}
