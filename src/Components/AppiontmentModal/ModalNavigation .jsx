import PopUpModalstyles from "@/styles/PopUpModal.module.css";
import { useState } from "react";
import AppiontContent from "./AppiontContent";
import AppiontContentTwo from "./AppiontContentTwo";
import AppiontContentThree from "./AppiontContentThree";

function ModalNav({ setShowModal }) {
  const [progressBar, setProgressBar] = useState(33);
  const [nextModal, setNextModal] = useState(0);

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

  // Modal contents Array
  const modalContents = [
    { modal: <AppiontContent /> },
    { modal: <AppiontContentTwo /> },
    { modal: <AppiontContentThree /> },
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
      <div className={PopUpModalstyles.modalNavProgressBar}>
        <div
          style={{ width: `${progressBar}%` }}
          className={PopUpModalstyles.modalNavProgressBarBlue}
        ></div>
      </div>
      {/* Nav Contents */}
      <div className={PopUpModalstyles.modalNavTexts}>
        <h1>Appiontment</h1>
        <h1>Details</h1>
        <h1>Book</h1>
      </div>
      {/* Modal Contents */}
      {modalContents[nextModal].modal}
      {/* Next Button */}
      <button className={PopUpModalstyles.button} onClick={() => progress()}>
        Next
      </button>
    </div>
  );
}

export default ModalNav;
