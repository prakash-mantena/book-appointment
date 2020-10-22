import { Selector as selector } from "testcafe";

export const elementWithIdAndClassName = selector(value => {
  return (
    document.getElementById(value) || document.getElementsByClassName(value)
  );
});
