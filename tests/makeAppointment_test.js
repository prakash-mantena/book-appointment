import config from "../support/config";
import { loginAsJohnDoe } from "../support/role";
import MakeAppointment from "../pageObjects/makeAppointment";
import SummaryPage from "../pageObjects/summaryPage";

const makeAppointment = new MakeAppointment();
const summaryPage = new SummaryPage();

fixture("Make Appointment").page(config.baseUrl);

test("check if user can book an appointment", async test => {
  await test
    .useRole(loginAsJohnDoe)
    .click(makeAppointment.facility)
    .click(
      makeAppointment.facilityOption.withText("Tokyo CURA Healthcare Center")
    )
    .typeText(makeAppointment.visitDate, "20/11/2020")
    .click(makeAppointment.bookAppointmentBtn)
    .expect(summaryPage.summaryPageId.innerText)
    .contains("Appointment Confirmation");
});
