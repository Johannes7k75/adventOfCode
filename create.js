"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var year = process.argv[2];
var day = process.argv[3];
if (!year || !day) {
    throw new Error("Year or day not defined\nBe sure that you use so > create YEAR DAY");
}
var files = [
    {
        name: "solution.ts",
        content: "import { Solver } from '../../../Solver';\nconst solver = new Solver({year: \"%%YEAR\", day: \"%%DAY\"}).read()\nconst data = solver.rawInput\n\t\nexport function challengeOne(data: string) {}; \nexport function challengeTwo(data: string) {}; \nif (require.main === module) {\n\tsolver.log({\n\t\tchallenge: \"1\",\n\t\tdata: challengeOne(data),\n\t});\n\tsolver.log({\n\t\tchallenge: \"2\",\n\t\tdata: challengeTwo(data),\n\t});\n}\n",
        getContent: function (year, day) {
            return this.content
                .replaceAll("%%YEAR", year)
                .replaceAll("%%DAY", day.padStart(2, "0"));
        }
    },
    {
        name: "input.in",
        content: "",
        getContent: function () {
            return this.content;
        }
    },
    {
        name: "solution.test.ts",
        content: "import { describe, expect, test } from \"@jest/globals\";\nimport { challengeOne, challengeTwo } from \"./solution\";\n\t\nconst testData = ``\n\t\ndescribe(\"AoC %%YEAR Day%%DAY\", () => {\n\ttest(\"Test challenge 1 from Day%%DAY\", () => {\n\t\texpect(challengeOne(testData)).toBe();\n\t});\n\ttest(\"Test challenge 2 from Day%%DAY\", () => {\n\t\texpect(challengeTwo(testData)).toBe();\n\t});\n});",
        getContent: function (year, day) {
            return this.content
                .replaceAll("%%YEAR", year)
                .replaceAll("%%DAY", day.padStart(2, "0"));
        }
    },
];
var yearPath = __dirname + "/src/" + year;
var dayPath = yearPath + "/Day" + day.padStart(2, "0");
if (!(0, fs_1.existsSync)(yearPath))
    (0, fs_1.mkdirSync)(yearPath);
if (!(0, fs_1.existsSync)(dayPath))
    (0, fs_1.mkdirSync)(dayPath);
files.forEach(function (file) {
    if (!(0, fs_1.existsSync)(dayPath + "/" + file.name))
        (0, fs_1.writeFileSync)(dayPath + "/" + file.name, file.getContent(year, day));
});
