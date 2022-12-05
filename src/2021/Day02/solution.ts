import { Solver } from "../../../Solver";
const solver = new Solver({ year: "2021", day: "02" }).read();
const data = solver.rawInput;

export function challengeOne(data: string) {
  const splitedData = data.split("\n").map((x) => x.trim());
  const pos = {
    hor: 0,
    depth: 0,
  };

  splitedData.forEach((cmd) => {
    if (cmd.startsWith("forward")) pos.hor += Number(cmd.match(/\d+/g));
    if (cmd.startsWith("up")) pos.depth += Number(cmd.match(/\d+/g));
    if (cmd.startsWith("down")) pos.depth -= Number(cmd.match(/\d+/g));
  });

  return Math.abs(pos.depth * pos.hor);
}
export function challengeTwo(data: string) {
  const splitedData = data.split("\n").map((x) => x.trim());
  const pos = {
    hor: 0,
    depth: 0,
    aim: 0,
  };

  splitedData.forEach((cmd) => {
    const cmdNum = Number(cmd.match(/\d+/g));
    if (cmd.startsWith("forward")) {
      pos.hor += cmdNum;
      pos.depth += pos.aim * cmdNum;
    }
    if (cmd.startsWith("up")) {
      pos.aim -= cmdNum;
    }
    if (cmd.startsWith("down")) {
      pos.aim += cmdNum;
    }
  });

  return Math.abs(pos.depth * pos.hor);
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
