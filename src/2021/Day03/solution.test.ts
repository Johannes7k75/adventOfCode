import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe("AoC 2021 Day03", () => {
  test("Test challenge 1 from Day03", () => {
    expect(challengeOne(testData)).toBe(198);
  });
  test("Test challenge 2 from Day03", () => {
    expect(challengeTwo(testData)).toBe(230);
  });
});
