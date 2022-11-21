#!/usr/bin/env ts-node

import { promises as fs } from "fs";
import tinycolor from "tinycolor2";
import { Theme } from "./modules/Theme";

const blueSettings: Theme.Settings = {
  ui: {
    panelBackground: "#181A28",
    editorBackground: tinycolor("#181A28").lighten(2).toHexString(),
    foreground: "#b6c5d3",
    border: "#0D1117",
    accent: "#0A92AE",
  },
  syntax: Theme.syntaxDefault,
  common: Theme.commonDefault,
};

const graySettings: Theme.Settings = {
  ui: {
    panelBackground: "#181A1F",
    editorBackground: tinycolor("#181A1F").lighten(3).toHexString(),
    foreground: "#C6CCD7",
    border: "#0D1117",
    accent: "#0A92AE",
  },
  syntax: Theme.syntaxDefault,
  common: Theme.commonDefault,
};

const greenSettings: Theme.Settings = {
  ui: {
    panelBackground: "#041920",
    editorBackground: tinycolor("#041920").lighten(2).toHexString(),
    foreground: "#C6CCD7",
    border: "#0D1117",
    accent: "#0A92AE",
  },
  syntax: Theme.syntaxDefault,
  common: Theme.commonDefault,
};

const checkFolder = async () => {
  await fs.mkdir("./themes", { recursive: true });
};

const generateFiles = async () => {
  try {
    await Promise.all([
      fs.writeFile(
        "./themes/universum-blue.json",
        Theme.prettify(Theme.getSchema(blueSettings))
      ),
      fs.writeFile(
        "./themes/universum-gray.json",
        Theme.prettify(Theme.getSchema(graySettings))
      ),
      fs.writeFile(
        "./themes/universum-green.json",
        Theme.prettify(Theme.getSchema(greenSettings))
      ),
    ]);
  } catch {
    process.exit(1);
  }
};

checkFolder();
generateFiles();
