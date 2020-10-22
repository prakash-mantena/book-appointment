import { Selector } from "testcafe";
import config from "../support/config";
// import { loginAsJohnDoe } from "../support/role";
import MakeAppointmentPage from "../pageObjects/makeAppointmentPage";
import SummaryPage from "../pageObjects/summaryPage";
import MenuItems from "../pageObjects/menuItems";
import LoginPage from "../pageObjects/loginPage";

// const makeAppointmentPage = new makeAppointmentPage();
const menuItems = new MenuItems();
const loginPage = new LoginPage();
const makeAppointmentPage = new MakeAppointmentPage();
const summaryPage = new SummaryPage();

fixture("View Appointment History").page(config.baseUrl);

test("user can view list of his booked appointments", async test => {
  loginPage.loginAsJohnDoe(test);
  await test
    // .useRole(loginAsJohnDoe)
    .click("select")
    .click(Selector("option").filter('[value="Tokyo CURA Healthcare Center"]'))
    .typeText(makeAppointmentPage.visitDate, "20/11/2020")
    .click(makeAppointmentPage.bookAppointmentBtn)
    .click(summaryPage.homePageBtn)
    .click("select")
    .click(Selector("option").filter('[value="Seoul CURA Healthcare Center"]'))
    .typeText(makeAppointmentPage.visitDate, "10/03/2020")
    .click(makeAppointmentPage.bookAppointmentBtn)
    .click(menuItems.menuToggle)
    .click(menuItems.historyMenuOption)
    .expect(menuItems.history.innerText)
    .contains("20/11/2020", "Seoul CURA Healthcare Center");
});
