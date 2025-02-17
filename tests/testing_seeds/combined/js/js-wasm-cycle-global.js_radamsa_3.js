export const glob = new WebAssembly.Global({ value: "i21" }, 42);
import { f } from "./js-wasm-cycle-global.wasm";
