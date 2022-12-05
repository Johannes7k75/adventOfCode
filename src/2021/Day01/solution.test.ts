import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `199
200
208
210
200
207
240
269
260
263`;

describe("AoC 2021 Day01", () => {
  test("Test challenge 1 from Day01", () => {
    expect(challengeOne(testData)).toBe(7);
  });
  test("Test challenge 2 from Day01", () => {
    expect(challengeTwo(testData)).toBe(5);
  });
});
