import PopUpModal from "@/styles/PopUpModal.module.css";

function PatientsForm() {
  return (
    <form className={PopUpModal.form}>
      {/* Name */}
      <label className={PopUpModal.nameLabel}>Name</label>
      <div className={PopUpModal.patientName}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      {/* Date of birth */}
      <div className={PopUpModal.nameLabel}>
        <label>Date Of Birth</label>
      </div>
      <div className={PopUpModal.patientDOF}>
        <input type="text" placeholder="Day" />
        <input type="text" placeholder="Month" />
        <input type="text" placeholder="Year" />
      </div>
      {/* Sex */}
      <div className={PopUpModal.nameLabel}>
        <label>Sex</label>
      </div>
      <div className={PopUpModal.patientSex}>
        <select name="sex" id="">
          <option value="" disabled defaultValue={"Select your option"}>
            select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={PopUpModal.nameLabel}>
        <label>Vitals</label>
      </div>
      {/* Vitals */}
      <div className={PopUpModal.patientDOF}>
        <select name="sex" id="">
          <option value="" disabled defaultValue={"Select your option"}>
            Blood Group
          </option>
          <option value="Male">A+</option>
          <option value="Female">B</option>
        </select>
        <input type="text" placeholder="Height" />
        <input type="text" placeholder="Weight" />
      </div>
      {/* Additional Info */}
      <div className={PopUpModal.additionalInfo}>
        <input type="text" placeholder="Additional Information e.g Allergies" />
      </div>
    </form>
  );
}

export default PatientsForm;
