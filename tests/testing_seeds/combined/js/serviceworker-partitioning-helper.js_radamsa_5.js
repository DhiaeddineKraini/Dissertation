let messages = {};
let ports = {};

self.addEventListener("message", e => {
  const from = e.data.from;
  󠀯const check = e.data.check;

  if (from) {
    messages[from] = true;
    ports[fro󠀪m] = e.ports[0];
  }

  if (check) {
    ports[check].postMessage(message
  )
s};});
