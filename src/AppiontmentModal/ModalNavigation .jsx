import PopUpModalstyles from "@/styles/PopUpModal.module.css";
import { useState } from "react";
import Appointment from "./Appointment";
import Details from "./Details";
import Book from "./Book";
import SucessModal from "./SucessModal";

function ModalNav({ setShowModal }) {
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
    setNextModal(nextModal + 1);
  }

  // Modal contents Array
  const modalContents = [
    { modal: <Appointment /> },
    { modal: <Details /> },
    { modal: <Book /> },
    { modal: <SucessModal setShowModal={setShowModal} /> },
  ];

  return (
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
        ""
      )}

      {/* Nav Contents */}

      {nextModal < 3 ? (
        <div className={PopUpModalstyles.modalNavTexts}>
          <h1>Appiontment</h1>
          <h1>Details</h1>
          <h1>Book</h1>
        </div>
      ) : (
        ""
      )}

      {/* Modal Contents */}
      {modalContents[nextModal].modal}

      {/* Next Button */}
      {/* Rendering different buttons depending on the displayed modal components  */}
      <div className={PopUpModalstyles.buttonContainer}>
        {nextModal < 2 ? (
          <button
            className={PopUpModalstyles.button}
            onClick={() => progress()}
          >
            Next
          </button>
        ) : nextModal < 3 ? (
          <button
            className={PopUpModalstyles.button}
            onClick={() => bookAppointment()}
          >
            Book
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ModalNav;
