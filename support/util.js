import { Selector as selector } from "testcafe";

export const elementWithId = selector(value => {
  return document.getElementById(value);
});
