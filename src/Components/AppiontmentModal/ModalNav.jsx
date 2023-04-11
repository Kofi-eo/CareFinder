import PopUpModalstyles from "@/styles/PopUpModal.module.css";

function ModalNav({ setShowModal }) {
  return (
    <div className={PopUpModalstyles.modalNav}>
      <div
        className={PopUpModalstyles.modalCloseBtn}
        onClick={() => setShowModal(false)}
      >
        X
      </div>
      <div className={PopUpModalstyles.modalNavBar}></div>
    </div>
  );
}

export default ModalNav;
