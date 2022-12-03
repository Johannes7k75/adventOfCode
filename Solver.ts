import { readFileSync, writeFileSync } from "fs";

export class Solver {
  private year: string;
  private day: string;
  private dirPath: string;
  public rawInput: string;
  public parsedInput: string[];
  constructor({ year, day }: { year: string; day: string }) {
    this.year = year;
    this.day = day;
    this.dirPath =
      __dirname + "/" + this.year + "/Day" + this.day.padStart(2, "0");

    this.rawInput = "";
    this.parsedInput = [""];
  }

  read() {
    this.rawInput = readFileSync(this.dirPath + "/input.in", {
      encoding: "utf8",
    });
    this.parsedInput = this.parse();
    return this;
  }

  parse(data: string = this.rawInput): string[] {
    return data.split("\n").map((x) => x.trim());
  }

  write({
    challenge,
    data,
    format = true,
  }: {
    challenge: "1" | "2";
    data: string | number | Array<string> | object;
    format?: boolean;
  }) {
    writeFileSync(
      this.dirPath + "/output.c" + challenge,
      JSON.stringify(data, null, format ? "\t" : "")
    );
    return this;
  }

  log({
    challenge,
    data,
  }: {
    challenge: "1" | "2";
    data: string | number | object;
  }) {
    console.log(`Output Challenge ${challenge}:`, `\n\t${data}`);
  }
}
