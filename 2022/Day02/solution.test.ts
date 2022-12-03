import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `A Y
B X
C Z`;

describe("AoC 2022 Day02", () => {
  test("Test challenge 1 from Day02", () => {
    expect(challengeOne(testData)).toBe(15);
  });
  test("Test challenge 2 from Day02", () => {
    expect(challengeTwo(testData)).toBe(12);
  });
});
