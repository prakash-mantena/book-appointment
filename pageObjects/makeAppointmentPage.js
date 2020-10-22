import { elementWithIdAndClassName } from "../support/util";

export default class MakeAppointmentPage {
  constructor() {
    this.appointmentPage = elementWithIdAndClassName("appointment");
    // this.facility = elementWithIdAndClassName("combo-facility");
    // this.facilityOption = elementWithIdAndClassName("combo-facility").find("option");
    this.chkBoxHospitalReAdmission = elementWithIdAndClassName(
      "chk_hospotal_readmission"
    );
    this.medicareInsurance = elementWithIdAndClassName(
      "radio_program_medicare"
    );
    this.medicaidInsurance = elementWithIdAndClassName(
      "radio_program_medicaid"
    );
    this.noInsurance = elementWithIdAndClassName("radio_program_none");
    this.visitDate = elementWithIdAndClassName("txt_visit_date");
    this.comment = elementWithIdAndClassName("txt_comment");
    this.bookAppointmentBtn = elementWithIdAndClassName("btn-book-appointment");
  }
}
