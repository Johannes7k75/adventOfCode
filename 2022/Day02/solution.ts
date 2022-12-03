import { Solver } from "../../Solver";

type firstColumn = "A" | "B" | "C";
type secondColumn = "X" | "Y" | "Z";

const shapePoints = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
};

const shapeToWin = {
  A: "Y",
  B: "Z",
  C: "X",
};

const shapeToDraw = {
  A: "X",
  B: "Y",
  C: "Z",
};

const shape2Sel2L = {
  X: "A",
  Y: "C",
  Z: "B",
};

const shape2Sel2D = {
  X: "C",
  Y: "B",
  Z: "A",
};

const matchOutcome = {
  loss: 0,
  draw: 3,
  win: 6,
};

function getMatchOutcomeStrat(first: firstColumn, sec: secondColumn) {
  if (shapeToWin[first] === sec) return matchOutcome.win;
  if (shapeToDraw[first] === sec) return matchOutcome.draw;
  return matchOutcome.loss;
}

function getShapeToSelect(
  first: firstColumn,
  outcome: secondColumn
): secondColumn {
  if (shape2Sel2L[outcome] === first) return "Z";
  if (shape2Sel2D[outcome] === first) return "Y";
  return "X";
}

function getResult(first: firstColumn, sec: secondColumn) {
  let matchPoints = 0;
  matchPoints += shapePoints[sec];
  matchPoints += getMatchOutcomeStrat(first, sec);

  return matchPoints;
}

const solver = new Solver({ year: "2022", day: "2" }).read();
const data: string = solver.rawInput;

export function challengeOne(data: string) {
  return solver
    .parse(data)
    .map((pair) => pair.split(" "))
    .map((column) =>
      getResult(column[0] as firstColumn, column[1] as secondColumn)
    )
    .reduce((p, c) => p + c);
}
export function challengeTwo(data: string) {
  return solver
    .parse(data)
    .map((pair) => pair.split(" "))
    .map((column) =>
      getResult(
        column[0] as firstColumn,
        getShapeToSelect(
          column[0] as firstColumn,
          column[1] as secondColumn
        ) as secondColumn
      )
    )
    .reduce((p, c) => p + c);
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
