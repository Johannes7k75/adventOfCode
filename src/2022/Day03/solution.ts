import { Solver } from "../../../Solver";

const solver = new Solver({ year: "2022", day: "03" }).read();
const data = solver.rawInput;

function getCharValue(char: string) {
  return (new RegExp(/[a-z]/).exec(char) ?? [])?.length > 0
    ? char.charCodeAt(0) - 96
    : char.charCodeAt(0) - 38;
}

function getDuplicate(str1: string, str2: string): string {
  let duplicate = "";
  str1
    .split("")
    .forEach((char) => (str2.includes(char) ? (duplicate = char) : null));
  return duplicate;
}

function getMultipleDuplictes(strs: string[]) {
  let duplicate = "";
  strs[0]
    .split("")
    .forEach((char) =>
      strs[1].includes(char) && strs[2].includes(char)
        ? (duplicate = char)
        : null
    );
  return duplicate;
}

function makeChunky(inventoryArray: string[]) {
  const chunkyArray: string[][] = [];
  let counter = 0;
  let index = 0;
  for (const inv of inventoryArray) {
    if (counter % 3 === 0) {
      chunkyArray.push([]);
    }
    chunkyArray[index].push(inv);

    if (counter % 3 === 2) index++;
    counter++;
  }
  return chunkyArray;
}

export function challengeOne(data: string) {
  const splitedData: string[] = data.split("\n");
  const duplicateChars: string[] = [];

  splitedData.forEach((inv) => {
    const parseData = {
      firstPart: inv.slice(0, inv.length / 2),
      secondPart: inv.slice(inv.length / 2),
    };
    duplicateChars.push(
      getDuplicate(parseData.firstPart, parseData.secondPart)
    );
  });

  return Number(
    duplicateChars.reduce((p, c, ci) =>
      ci === 1
        ? (getCharValue(p) + getCharValue(c)).toString()
        : (Number(p) + getCharValue(c)).toString()
    )
  );
}
export function challengeTwo(data: string) {
  const splitedData: string[] = data.split("\n").map((x) => x.trim());
  const chunkyData = makeChunky(splitedData);
  const duplicatedItems: string[] = [];

  chunkyData.forEach((inv) => duplicatedItems.push(getMultipleDuplictes(inv)));

  // const duplicatedItems = getMultipleDuplictes(chunkyData);

  return Number(
    duplicatedItems.reduce((p, c, ci) =>
      ci === 1
        ? (getCharValue(p) + getCharValue(c)).toString()
        : (Number(p) + getCharValue(c)).toString()
    )
  );
}

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
