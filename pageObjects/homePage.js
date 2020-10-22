import { elementWithIdAndClassName } from "../support/util";

export default class HomePage {
  constructor() {
    this.makeAppointmentPageBtn = elementWithIdAndClassName(
      "btn-make-appointment"
    );
  }
}
