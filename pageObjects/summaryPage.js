import { elementWithIdAndClassName } from "../support/util";

export default class SummaryPage {
  constructor() {
    this.summaryPageId = elementWithIdAndClassName("summary");
    this.homePageBtn = elementWithIdAndClassName("btn btn-default");
  }
}
