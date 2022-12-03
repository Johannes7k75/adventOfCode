import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe("AoC 2022 Day01", () => {
  test("Test challenge 1 from Day01", () => {
    expect(challengeOne(testData)).toBe(24000);
  });
  test("Test challenge 2 from Day01", () => {
    expect(challengeTwo(testData)).toBe(45000);
  });
});
