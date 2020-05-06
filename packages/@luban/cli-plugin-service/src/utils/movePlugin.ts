import fs from "fs-extra";
import { Compiler } from "webpack";

class MovePlugin {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public apply(compiler: Compiler): void {
    compiler.hooks.done.tap("move-plugin", () => {
      if (fs.existsSync(this.from)) {
        fs.moveSync(this.from, this.to, { overwrite: true });
      }
    });
  }
}

export { MovePlugin };
