import { Solver } from "../../Solver";

const solver = new Solver({ year: "2021", day: "1" }).read();
const data = solver.rawInput;

export function challengeOne(data: string) {
  const depths: number[] = solver.parse(data).map((x) => Number(x));
  let increased = 0;

  depths.reduce((p, c) => {
    p < c ? increased++ : null;
    return c;
  });
  return increased;
}
export function challengeTwo(data: string) {
  const depths: number[] = solver.parse(data).map((x) => Number(x));
  let increased = 0;

  depths.reduce((p, c, ci, a) => {
    if (!a[ci - 1] || !a[ci + 1]) return c;
    p + a[ci] + a[ci + 1] < c + a[ci + 1] + a[ci + 2] ? increased++ : null;
    return c;
  });

  return increased;
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
