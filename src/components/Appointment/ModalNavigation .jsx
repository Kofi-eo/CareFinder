import PopUpModalstyles from '@/styles/PopUpModal.module.css';
import { useRouter } from "next/router";
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../pages/_app";
import Appointment from './Appointment';
import Book from './Book';
import Details from './Details';
import SucessModal from './SucessModal';

function ModalNav({ setShowModal }) {
	const { signedIn } = useAuth();
	const router = useRouter();
	const [formDetails, setFormDetails] = useState({
		appointmentType: 'In-person',
		meetingDate: 'Tue April 25, 2023',
		meetingTime: '7:50AM',
		firstName: '',
		lastName: '',
		sex: '',
	});

	function formUpdate(key, newvalue) {
		setFormDetails((item) => ({ ...item, [key]: newvalue }));
	}

	console.log(formDetails);

	const [progressBar, setProgressBar] = useState(33);
	const [nextModal, setNextModal] = useState(0);
	console.log(nextModal);

	function progress() {
		// moving progress bar
		if (progressBar < 99) {
			setProgressBar(progressBar + 33);
		}
		// changing the modal contents
		if (nextModal < 2) {
			setNextModal(nextModal + 1);
		}
	}

	function bookAppointment() {
		// add bookinng function here
		if (!signedIn) {
			toast.success('sign in required');
			router.push('/Auth');
		}
		setNextModal(nextModal + 1);
	}

	// Modal contents Array
	const modalContents = [
		{ modal: <Appointment formDetails={formDetails} formUpdate={formUpdate} /> },
		{ modal: <Details formDetails={formDetails} formUpdate={formUpdate} /> },
		{ modal: <Book formDetails={formDetails} formUpdate={formUpdate} /> },
		{ modal: <SucessModal formDetails={formDetails} setShowModal={setShowModal} /> },
	];
	const canNext = [formDetails.firstName, formDetails.lastName, formDetails.sex].every(Boolean);

	return (
		<>
			<Toaster />
			<div className={PopUpModalstyles.modalNav}>
				{/* Close Button */}
				<div
					className={PopUpModalstyles.modalCloseBtn}
					onClick={() => setShowModal(false)}
				>
					X
				</div>
				{/* Progress Bar */}
				{nextModal < 3 ? (
					<div className={PopUpModalstyles.modalNavProgressBar}>
						<div
							style={{ width: `${progressBar}%` }}
							className={PopUpModalstyles.modalNavProgressBarBlue}
						></div>
					</div>
				) : (
					''
				)}

				{/* Nav Contents */}

				{nextModal < 3 ? (
					<div className={PopUpModalstyles.modalNavTexts}>
						<h1>Appointment</h1>
						<h1>Details</h1>
						<h1>Book</h1>
					</div>
				) : (
					''
				)}

				{/* Modal Contents */}
				{modalContents[nextModal].modal}

				{/* Next Button */}
				{/* Rendering different buttons depending on the displayed modal components  */}
				<div className={PopUpModalstyles.buttonContainer}>
					{nextModal == 0 ? (
						<button
							className={PopUpModalstyles.button}
							onClick={() => progress()}
						>
							Next
						</button>
					) : nextModal == 1 ? (
						<button
							className={PopUpModalstyles.button}
							onClick={() => progress()}
							disabled={!canNext}
						>
							Next
						</button>
					)
						: nextModal == 2 ? (
							<button
								className={PopUpModalstyles.button}
								onClick={() => bookAppointment()}
							>
								Book
							</button>
						) : (
							''
						)}

				</div>
			</div>
		</>
	);
}

export default ModalNav;
