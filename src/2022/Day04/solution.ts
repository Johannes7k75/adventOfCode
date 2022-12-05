import { Solver } from "../../../Solver";
const solver = new Solver({ year: "2022", day: "04" }).read();
const data = solver.rawInput;

type pair = {
  list: number[];
  start: number;
  end: number;
};

type numPair = {
  first: pair;
  second: pair;
};

function getNumList(from: number, to: number) {
  const nums = [];
  for (let num = from; num <= to; num++) {
    nums.push(num);
  }
  return nums;
}

function getFullyContainedList(firstList: pair, secondList: pair) {
  if (firstList.list.every((elem) => secondList.list.indexOf(elem) > -1)) {
    return firstList;
  } else if (
    secondList.list.every((elem) => firstList.list.indexOf(elem) > -1)
  ) {
    return secondList.list;
  } else return false;
}

function getContainedList(firstList: pair, secondList: pair) {
  if (firstList.list.some((elem) => secondList.list.indexOf(elem) > -1)) {
    return firstList;
  } else if (
    secondList.list.some((elem) => firstList.list.indexOf(elem) > -1)
  ) {
    return secondList.list;
  } else return false;
}

function getPairedList(pairs: string[]): numPair[] {
  const pair: string[][] = pairs.map((pair) => pair.split(","));

  return pair.map((numbPair) => {
    return {
      first: {
        list: getNumList(
          parseInt(numbPair[0].split("-")[0]),
          parseInt(numbPair[0].split("-")[1])
        ),
        get start() {
          return Math.min(...this.list);
        },
        get end() {
          return Math.max(...this.list);
        },
      },
      second: {
        list: getNumList(
          parseInt(numbPair[1].split("-")[0]),
          parseInt(numbPair[1].split("-")[1])
        ),
        get start() {
          return Math.min(...this.list);
        },
        get end() {
          return Math.max(...this.list);
        },
      },
    };
  });
}

export function challengeOne(data: string) {
  const parsedData = solver.parse(data);
  const pairedList: numPair[] = getPairedList(parsedData);

  return pairedList
    .map((list) => getFullyContainedList(list.first, list.second))
    .filter((list) => !!list).length;
}
export function challengeTwo(data: string) {
  const parsedData = solver.parse(data);
  const pairedList: numPair[] = getPairedList(parsedData);

  return pairedList
    .map((list) => getContainedList(list.first, list.second))
    .filter((list) => !!list).length;
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
