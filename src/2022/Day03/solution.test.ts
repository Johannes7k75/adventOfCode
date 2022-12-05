import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe("AoC 2022 Day03", () => {
  test("Test challenge 1 from Day03", () => {
    expect(challengeOne(testData)).toBe(157);
  });
  test("Test challenge 2 from Day03", () => {
    expect(challengeTwo(testData)).toBe(70);
  });
});
