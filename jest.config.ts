import { createCjsPreset } from "jest-preset-angular/presets";
import type { Config } from "jest";

export default {
  ...createCjsPreset(),
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
} satisfies Config;
