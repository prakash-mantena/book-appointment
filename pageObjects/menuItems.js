import { elementWithIdAndClassName } from "../support/util";

export default class MenuItems {
  constructor() {
    this.menuToggle = elementWithIdAndClassName("menu-toggle");
    this.historyMenuOption = elementWithIdAndClassName("sidebar-wrapper")
      .find("ul")
      .find("li")
      .nth(2);
    this.history = elementWithIdAndClassName("history");
  }
}
