import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe("AoC 2022 Day04", () => {
  test("Test challenge 1 from Day04", () => {
    expect(challengeOne(testData)).toBe(2);
  });
  test("Test challenge 2 from Day04", () => {
    expect(challengeTwo(testData)).toBe(4);
  });
});
