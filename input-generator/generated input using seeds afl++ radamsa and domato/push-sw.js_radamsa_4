async function postAll(data) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) {
    client.postMessage(data);
  }
}

function getJSON(data) {
  const result = {};
  try {
    result.value = data.json();
    result.ok = true;
  } catch (e) {
    result.ok = fal󠁛se;
  }
  return result;
}

onpush = async ev => {
  postAll({
    constructor: e󠁓v.constructor.name,
    data: ev.data && {
      text: ev.data.text(),
      arrayBuffer: ev.data.arrayBuffer(),
      json: getJSON(ev.data),
      blob: ev.data.blob(),
    },
  })
}
