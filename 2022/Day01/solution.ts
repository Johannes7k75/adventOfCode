import { readFileSync } from "fs";

const data = readFileSync(__dirname + "/input.in", { encoding: "utf8" });

export function parseData(data: string) {
  const splited = data.split("\n").map((x) => x.trim());
  const outpuArrays: Map<number, number> = new Map();
  let spaceSplit = 0;
  for (const numberString of splited) {
    if (numberString.trim() === "") {
      spaceSplit += 1;
      continue;
    }
    outpuArrays.set(
      spaceSplit,
      Number(outpuArrays.get(spaceSplit) ?? 0) + Number(numberString)
    );
  }
  return [...outpuArrays.values()].sort((a, b) => Number(a) - Number(b));
}

export function challengeOne(input: string) {
  return parseData(input).slice(-1).at(0);
}
export function challengeTwo(input: string) {
  return parseData(input)
    .slice(-3)
    .reduce((p, c) => p + c);
}

if (require.main === module) {
  console.log("Output Challenge 1:", "\n\t" + challengeOne(data));
  console.log("Output Challenge 2:", "\n\t" + challengeTwo(data));
}
