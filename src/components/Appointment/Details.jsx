import React from "react";
import PopUpModal from "@/styles/PopUpModal.module.css";
import PatientsForm from "./PatientsForm";

function Details({formDetails, formUpdate}) {
  return (
    <>
      <div className={PopUpModal.patientFormContainer}>
        <div className={PopUpModal.patientFormTitle}>
          <h1>Patient Form</h1>
          <p>
            The following information will be sent to Dr. Paul Eneche’s Office
          </p>
        </div>
        <PatientsForm formDetails={formDetails} formUpdate={formUpdate}/>
      </div>
    </>
  );
}

export default Details;
