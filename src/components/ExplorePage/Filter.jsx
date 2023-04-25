
export default function Filter() {
	const xfilter = () => {
		return 0;
	};
	return (
		//
		<div className='filter-container'>
			<form onSubmit={xfilter} className='filter-form'>
				<input type='text' placeholder='City' />
				<input type='text' placeholder='State' />

				<select placeholder='Department'>
					<option value='text' data-placeholder='Department 1'>
						Select A Department
					</option>
				</select>

				<input type='datetime-local' />

				<button>Filter</button>
				<button>Reset</button>
			</form>
		</div>
	);
}
