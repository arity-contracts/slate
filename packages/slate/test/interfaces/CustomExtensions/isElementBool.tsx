import { CustomExtensions } from "slate";

export const input = true;
export const test = value => {
  return CustomExtensions.isElement(value);
};
export const output = false;
