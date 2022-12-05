import { writeFileSync, existsSync, mkdirSync } from "fs";

const year = process.argv[2];
const day = process.argv[3];

if (!year || !day) {
  throw new Error(
    "Year or day not defined\nBe sure that you use so > create YEAR DAY"
  );
}

const files = [
  {
    name: "solution.ts",
    content: `import { Solver } from '../../../Solver';
const solver = new Solver({year: "%%YEAR", day: "%%DAY"}).read()
const data = solver.rawInput
	
export function challengeOne(data: string) {}; 
export function challengeTwo(data: string) {}; 
if (require.main === module) {
	solver.log({
		challenge: "1",
		data: challengeOne(data),
	});
	solver.log({
		challenge: "2",
		data: challengeTwo(data),
	});
}
`,
    getContent(year: string, day: string) {
      return this.content
        .replaceAll("%%YEAR", year)
        .replaceAll("%%DAY", day.padStart(2, "0"));
    },
  },
  {
    name: "input.in",
    content: "",
    getContent() {
      return this.content;
    },
  },
  {
    name: "solution.test.ts",
    content: `import { describe, expect, test } from "@jest/globals";
import { challengeOne, challengeTwo } from "./solution";
	
const testData = \`\`
	
describe("AoC %%YEAR Day%%DAY", () => {
	test("Test challenge 1 from Day%%DAY", () => {
		expect(challengeOne(testData)).toBe();
	});
	test("Test challenge 2 from Day%%DAY", () => {
		expect(challengeTwo(testData)).toBe();
	});
});`,
    getContent(year: string, day: string) {
      return this.content
        .replaceAll("%%YEAR", year)
        .replaceAll("%%DAY", day.padStart(2, "0"));
    },
  },
];

const yearPath = __dirname + "/src/" + year;
const dayPath = yearPath + "/Day" + day.padStart(2, "0");

if (!existsSync(yearPath)) mkdirSync(yearPath);

if (!existsSync(dayPath)) mkdirSync(dayPath);

files.forEach((file) => {
  if (!existsSync(dayPath + "/" + file.name))
    writeFileSync(dayPath + "/" + file.name, file.getContent(year, day));
});
