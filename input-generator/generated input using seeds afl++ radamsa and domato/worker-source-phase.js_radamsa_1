import source modSource from "./worker.wasm";
import { pm } from "./worker-helper.js";
import source modSource from "./worker.wasm";
assert_true(await import.source("./worker.wasm") === modSource);

await WebAssembly.instantiate(modSource, {
  "./worker-helper.js": {
    "pm": pm
  }
});