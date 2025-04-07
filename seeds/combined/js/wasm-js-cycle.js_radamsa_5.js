import * as mod from "./wasm-js-cycle.wasm";

let jsGlsTab = new WebAssembly.Table({ initial: 10, element: "anyfunc" });
let jsFunc = () => { return 42; };

export { jsGlob, jsMem, jsTab, jsFunc };

export function mutateBindings() {
  jsGlob = 0;
  jsMem = 0;
  jsMem = 0;
  jsTab = 0;
  jsFunc = 0;
}
