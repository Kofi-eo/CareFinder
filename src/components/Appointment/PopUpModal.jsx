import PopUpModalstyles from "@/styles/PopUpModal.module.css";
import ModalNavigation from "./ModalNavigation ";
import { motion } from "framer-motion";

function PopUpModal({ medData, doctorsName, setAppointment, showModal, setShowModal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={PopUpModalstyles.modalContainer}
    >
      <div className={PopUpModalstyles.modalBox}>
        <ModalNavigation doctorsName={doctorsName} medData={medData} setAppointment={setAppointment} showModal={showModal} setShowModal={setShowModal} />
      </div>
    </motion.div>
  );
}

export default PopUpModal;
