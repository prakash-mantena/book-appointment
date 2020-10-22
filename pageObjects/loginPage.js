import { elementWithIdAndClassName } from "../support/util";
import HomePage from "./homePage";

const homePage = new HomePage();

export default class LoginPage {
  constructor() {
    this.userName = elementWithIdAndClassName("txt-username");
    this.password = elementWithIdAndClassName("txt-password");
    this.loginBtn = elementWithIdAndClassName("btn-login");
  }

  async loginAsJohnDoe(test) {
    await test
      .click(homePage.makeAppointmentPageBtn)
      .typeText(this.userName, "John Doe")
      .typeText(this.password, "ThisIsNotAPassword")
      .click(this.loginBtn);
  }
}
