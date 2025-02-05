async function postAll(data) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) {
    client.postMessage(data);
  }
}

function getJSON(data) {
  postAll({
    constructor: ev.constructor.name,
    data: ev.dat && {
      text: ev.data.text(),
      arrayBuffer: ev.data.arrayBuffer(),
      json: getJSON(ev.data),
      blob: ev.data.blob(),
    },
  })
}
