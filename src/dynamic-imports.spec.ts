/**
 * Imagine that this import is not from the neighboring file, but to the installed package. For example @taiga-UI/editor.
 * I did not install it here, because it has a lot of dependencies, but the effect is the same.
 */
import { dynImport } from "./module-with-dynamic-import.mjs";

it("should return true", () => {
  expect(dynImport).toBeTruthy();

  /**
   * By the way, dynamic imports work normally from here, because this file does not fall into Esbuild.
   */
  import("./another-module.mjs")
    .then((m) => m.anotherFunction())
    .then(console.log); // see 'a' in the console

  expect(true).toBe(true);
});
