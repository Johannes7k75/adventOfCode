import { Solver } from "../../../Solver";
const solver = new Solver({ year: "2021", day: "03" }).read();
const data = solver.rawInput;

function getBits(str: string[]) {
  const strLength = str[0].length;
  const counter: string[][] = [...new Array(strLength)].map(() => []);
  for (const bitRows of str) {
    for (let i = 0; i < strLength; i++) {
      counter[i].push(bitRows.charAt(i));
    }
  }
  return counter;
}

function binary2num(binary: string) {
  return parseInt(binary, 2);
}

function sortBits(bits: string[][]) {
  const bitsCount: {
    zero: number;
    one: number;
    most: "0" | "1";
    least: "0" | "1";
  }[] = [];

  bits.forEach((bitColumn) => {
    bitsCount.push({
      zero: bitColumn.filter((v) => v === "0").length,
      one: bitColumn.filter((v) => v === "1").length,

      get most() {
        return this.zero > this.one ? "0" : "1";
      },
      get least() {
        return this.zero < this.one ? "0" : "1";
      },
    });
  });

  return bitsCount;
}

function commonBits(bits: string[][], most = true) {
  return binary2num(
    sortBits(bits)
      .map((bit) => (most ? bit.most : bit.least))
      .join("")
  );
}

function getRating(data: string[], bits: string[][], most = true) {
  let selected = data;
  let selectedNums = "";
  const sort = (charAt = 0) => {
    const dataAt = sortBits(getBits(selected)).at(charAt);

    return most
      ? dataAt?.zero === dataAt?.one
        ? 1
        : dataAt?.most
      : dataAt?.zero === dataAt?.one
      ? 0
      : dataAt?.least;
  };

  while (selected.length > 2) {
    const numToSlect = sort(selectedNums.length);
    selectedNums += numToSlect;
    selected = data.filter((v) => v.startsWith(selectedNums));
  }

  selected = [
    selected.at(
      selected.findIndex(
        (v) => v.charAt(selectedNums.length) === (most ? "1" : "0")
      )
    ) as string,
  ];

  return selected.at(0);
}

export function challengeOne(data: string) {
  const bits = getBits(solver.parse(data));

  const mostCommonBits = commonBits(bits, true);
  const leastCommonBits = commonBits(bits, false);

  return mostCommonBits * leastCommonBits;
}
export function challengeTwo(data: string) {
  const parsedData = solver.parse(data);
  const bits = getBits(parsedData);

  const o2GRating = getRating(parsedData, bits, true) as string;
  const co2GRating = getRating(parsedData, bits, false) as string;

  return binary2num(o2GRating) * binary2num(co2GRating);
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
