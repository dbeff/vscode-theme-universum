#!/usr/bin/env ts-node

import { promises as fs } from "fs";
import { Theme } from "./modules/Theme";

const checkFolder = async () => {
  await fs.mkdir("./themes", { recursive: true });
};

const generateFiles = async () => {
  try {
    await Promise.all([
      fs.writeFile(
        "./themes/universum-main.json",
        Theme.prettify(
          Theme.getSchema({
            ui: Theme.uiDefault("#181A28", "#0B97B3"),
            syntax: Theme.syntaxDefault,
            palette: Theme.paletteDefault,
          })
        )
      ),
      fs.writeFile(
        "./themes/universum-blue.json",
        Theme.prettify(
          Theme.getSchema({
            ui: Theme.uiDefault("#181C27", "#0B97B3"),
            syntax: Theme.syntaxDefault,
            palette: Theme.paletteDefault,
          })
        )
      ),
      fs.writeFile(
        "./themes/universum-gray.json",
        Theme.prettify(
          Theme.getSchema({
            ui: Theme.uiDefault("#181A1F", "#0B97B3"),
            syntax: Theme.syntaxDefault,
            palette: Theme.paletteDefault,
          })
        )
      ),
      fs.writeFile(
        "./themes/universum-green.json",
        Theme.prettify(
          Theme.getSchema({
            ui: Theme.uiDefault("#0f1d22", "#0B97B3"),
            syntax: Theme.syntaxDefault,
            palette: Theme.paletteDefault,
          })
        )
      ),
    ]);
  } catch {
    process.exit(1);
  }
};

checkFolder();
generateFiles();
