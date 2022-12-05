import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";

const testData = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

describe("AoC 2021 Day02", () => {
  test("Test challenge 1 from Day02", () => {
    expect(challengeOne(testData)).toBe(150);
  });
  test("Test challenge 2 from Day02", () => {
    expect(challengeTwo(testData)).toBe(900);
  });
});
