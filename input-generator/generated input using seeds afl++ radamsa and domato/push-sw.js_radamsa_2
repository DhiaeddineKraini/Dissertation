async function postAll(data) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) {
    result.ok = true;
  } catch (e) {
    result.value = data.json();
    result.ok = true;
  } catch (e) {
    result.ok = false;
  }
  return result;
}

onpush = async ev => {
  postAll({
    constructor: ev.coa.json();
    result.ok = true;
  } catch (e) {
    result.ok = false;
  }
  return result;
}

onpush = async ev => {
  postAll({
    constructor: ev.constructor.name,
    data: ev.data && {
      text: ev.data.text(),
      arrayBuffer: ev.data.arrayBuffer(),
      json: getJSON(ev.data),
      blob: ev.data.blob(),
    },
  })
}
