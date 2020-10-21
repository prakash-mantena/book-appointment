import { elementWithId } from "../support/util";

export default class LoginPage {
  constructor() {
    this.userName = elementWithId("txt-username");
    this.password = elementWithId("txt-password");
    this.loginBtn = elementWithId("btn-login");
  }
}
