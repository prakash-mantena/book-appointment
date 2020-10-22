import { Role } from "testcafe";
import LoginPage from "../pageObjects/loginPage";
import HomePage from "../pageObjects/homePage";
import config from "./config";

const loginPage = new LoginPage();
const homePage = new HomePage();

export const loginAsJohnDoe = Role(
  config.baseUrl,
  async test => {
    await test
      .click(homePage.makeAppointmentPageBtn)
      .typeText(loginPage.userName, "John Doe")
      .typeText(loginPage.password, "ThisIsNotAPassword")
      .click(loginPage.loginBtn);
  },
  { preserveUrl: true }
);
