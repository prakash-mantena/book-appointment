import { elementWithId } from "../support/util";

export default class MakeAppointment {
  constructor() {
    this.appointmentPage = elementWithId("appointment");
    this.facility = elementWithId("combo-facility");
    this.facilityOption = elementWithId("combo-facility").find("option");
    this.chkBoxHospitalReAdmission = elementWithId("chk_hospotal_readmission");
    this.medicareInsurance = elementWithId("radio_program_medicare");
    this.medicaidInsurance = elementWithId("radio_program_medicaid");
    this.noInsurance = elementWithId("radio_program_none");
    this.visitDate = elementWithId("txt_visit_date");
    this.comment = elementWithId("txt_comment");
    this.bookAppointmentBtn = elementWithId("btn-book-appointment");
  }
}
