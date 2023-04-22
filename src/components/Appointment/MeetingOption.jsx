import { useState } from 'react';
import PopUpModal from '@/styles/PopUpModal.module.css';

function MeetingOption({ formUpdate, formDetails }) {
	// const [appiontmentType, setAppiontmentType] = useState("In-Person");
	//   selector Box
	const [selectorBoxPosition, setSelectorBoxPosition] = useState('50%');

	//   Meeting Option selctor animation
	function selector(meetingOption) {
		// setAppiontmentType(meetingOption);
		formUpdate('appointmentType', meetingOption);
		if (meetingOption === 'Video Call') {
			setSelectorBoxPosition('0%');
			let videoCall = document.getElementById('videoCall');
			let inPerson = document.getElementById('inPerson');
			videoCall.style.color = 'white';
			inPerson.style.color = 'black';
		} else {
			let videoCall = document.getElementById('videoCall');
			let inPerson = document.getElementById('inPerson');
			videoCall.style.color = 'black';
			inPerson.style.color = 'white';
			setSelectorBoxPosition('50%');
		}
		console.log(formDetails.appointmentType);
	}

	return (
		<>
			<div className={PopUpModal.meetingOption}>
				<div className={PopUpModal.meetingOptionBox}>
					<div
						className={PopUpModal.selectorBox}
						style={{
							backgroundColor: '#003963',
							color: 'white',
							right: selectorBoxPosition,
						}}
					></div>
					<div
						//  initial color
						style={{ color: 'white' }}
						id='inPerson'
						className={PopUpModal.select}
						onClick={() => selector('In-Person')}
					>
						<h1>In-Person</h1>
					</div>
					<div
						id='videoCall'
						className={PopUpModal.select}
						onClick={() => selector('Video Call')}
					>
						<h1>Video Call</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default MeetingOption;
