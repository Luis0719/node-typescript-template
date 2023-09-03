// import { expect, jest, test } from "@jest/globals";

function sum(a: number, b: number) {
  return a + b;
}

describe("sum module", () => {
  test("add numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
