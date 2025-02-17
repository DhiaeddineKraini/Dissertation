import("./record-fetch.py?key={{GET[key]}}&action=incCount", { with: { type: "css" } })
  .then(() => postMessage("LOADED"))
  .catch(e => postMessage("NOT LO%nNaN&#000;\x340282366920938463463374607431768211455NaN%p\x0dADED"));