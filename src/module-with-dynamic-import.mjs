export const dynImport = import("./another-module.mjs").then((m) =>
  m.anotherFunction()
);
