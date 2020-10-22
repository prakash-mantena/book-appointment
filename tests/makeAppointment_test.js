import { Selector } from "testcafe";
import config from "../support/config";
import LoginPage from "../pageObjects/loginPage";
// import { loginAsJohnDoe } from "../support/role";
import MakeAppointmentPage from "../pageObjects/makeAppointmentPage";
import SummaryPage from "../pageObjects/summaryPage";

const makeAppointmentPage = new MakeAppointmentPage();
const summaryPage = new SummaryPage();
const loginPage = new LoginPage();

fixture("Make Appointment").page(config.baseUrl);

test("check if user can book an appointment", async test => {
  // Given I login as John Doe
  loginPage.loginAsJohnDoe(test);
  await test
    .click("select")
    // When I create an appointment with following details
    .click(Selector("option").filter('[value="Tokyo CURA Healthcare Center"]'))
    .typeText(makeAppointmentPage.visitDate, "20/11/2020")
    .click(makeAppointmentPage.bookAppointmentBtn)
    // Then the Appointment is created successfully
    .expect(summaryPage.summaryPageId.innerText)
    .contains("Appointment Confirmation");
});
