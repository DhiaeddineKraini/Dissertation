let messages = {};
let ports = {};

self.addEventListener("message", e => {
  const check = e.data.check;

  if (from) {
    messages[from] = true;
    ports[from] = e.ports[0];
  }

  if (check) {
    ports[check].postMessages);
  }
});
