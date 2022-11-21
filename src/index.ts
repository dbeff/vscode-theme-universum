#!/usr/bin/env ts-node

import { promises as fs } from "fs";
import { Theme } from "./modules/Theme";

const azureSettings: Theme.Settings = {
  ui: {
    panelBackground: "#181A28",
    editorBackground: "#1B1D2B",
    border: "#0D1117",
    accent: "#0A92AE",
  },
  syntax: {
    keywords: "#EA5D76",
    storage: "#0DB5D7",
    variables: "#C7CCD6",
    string: "#98C379",
    attributes: "#E5C07B",
    tags: "#0DB5D7",
  },
  common: {
    foreground: "#b6c5d3",
    red: "#EA5D76",
    blue: "#0DB5D7",
    yellow: "#E5C07B",
    green: "#98C379",
    purple: "#a38ecb",
  },
};

const shadeSettings: Theme.Settings = {
  ui: {
    panelBackground: "#181A1F",
    editorBackground: "#1D1F24",
    border: "#0D1117",
    accent: "#0A92AE",
  },
  syntax: {
    keywords: "#EA5D76",
    storage: "#0DB5D7",
    variables: "#C7CCD6",
    string: "#98C379",
    attributes: "#E5C07B",
    tags: "#0DB5D7",
  },
  common: {
    foreground: "#b6c5d3",
    red: "#EA5D76",
    blue: "#0DB5D7",
    yellow: "#E5C07B",
    green: "#98C379",
    purple: "#a38ecb",
  },
};

const checkFolder = async () => {
  await fs.mkdir("./themes", { recursive: true });
};

const generateFiles = async () => {
  try {
    await Promise.all([
      fs.writeFile(
        "./themes/universum-azure.json",
        Theme.prettify(Theme.getSchema(azureSettings))
      ),
      fs.writeFile(
        "./themes/universum-shade.json",
        Theme.prettify(Theme.getSchema(shadeSettings))
      ),
    ]);
  } catch {
    process.exit(1);
  }
};

checkFolder();
generateFiles();
