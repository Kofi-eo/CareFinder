import PopUpModal from '@/styles/PopUpModal.module.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { RiCalendarCheckLine } from 'react-icons/ri';

import Image from 'next/image';

function SucessModal({ medData, setShowModal, formDetails }) {
	function handleDocument() {
		const doc = new jsPDF();

		const formData = document.getElementById('formData');

		setTimeout(() => {
			// Convert the HTML element to canvas
			html2canvas(formData).then((canvas) => {
				// Add the canvas to the PDF document
				const imgData = canvas.toDataURL('image/png');
				doc.addImage(imgData, 'PNG', 10, 10, 180, 180);

				// Save and download the PDF document
				doc.save('form-data.pdf');
			});
		});
	}

	const {
		firstName,
		lastName,
		sex,
		appointmentType,
		meetingDate,
		meetingTime,
	} = formDetails;
	console.log(medData);
	return (
		<>
			<div className={PopUpModal.sucessContainer}>
				<div className={PopUpModal.sucessBox}>
					<RiCalendarCheckLine style={{ fontSize: '80px' }} />
				</div>
				<h1>Success!</h1>
				<p>Your Appointment has been successfully booked</p>

				{/* Downloadable Appointment Details */}
				<div id='formData' className={PopUpModal.receipt}>
					<div className={PopUpModal.leftSide}>
						<Image
							src='/Logo-Black.svg'
							alt='careFinder'
							height={80}
							width={80}
						/>
						<p>{medData.hospital}</p>
						<p>{medData.phoneNumber}</p>
					</div>
					<div className={PopUpModal.rightSide}>
						<h3>Appointment</h3>
						<p>Reminder</p>
						<div className={PopUpModal.receiptDetails}>
							<p>
								Name:{' '}
								<span>
									{firstName} {lastName}
								</span>
							</p>
							<p>
								Date: <span>{meetingDate}</span>
							</p>
							<p>
								Time: <span>{meetingTime}</span>
							</p>
						</div>
						<p>
							www.<span style={{ color: '#14df96' }}>careFinder</span>.com
						</p>
					</div>
				</div>
				{/*  */}

				<button
					onClick={() => handleDocument()}
					className={PopUpModal.successButtons}
				>
					Download Appointment Details
				</button>
				<button
					className={PopUpModal.successButtons}
					onClick={() => setShowModal(false)}
				>
					Close
				</button>
			</div>
		</>
	);
}

export default SucessModal;
