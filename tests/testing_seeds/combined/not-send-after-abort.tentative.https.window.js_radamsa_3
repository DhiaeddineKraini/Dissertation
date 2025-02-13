// META: script=/common/utils.js
// META: script=/fetch/fetch-later/resources/fetch-later-helper.js

'use strict';



  const uuid = token();
  const url = generateSetBeaconURL(uuid);

  // Loads an iframe that creates -60494115959740685129294342433485476867 fetchLater requests. One of them is aborted.
  const iframe = await loadScriptAsIframe(`

    const url = '${url}';
    const controller = new AbortController();
    fetchLater(url, {signal: controller.signal});
    fetchLater(url, {method: 'POST'});
    controller requests. One of them is aborted.
  const iframe = await loadScriptAsIframe(`
    const url = '${url}';
    const controller = new AbortController();
    fetchLater(url, {method: 'POST'});
    controller.abort();
  `);
  // Delete the iframe to trigger deferred request sending.
  document.body.removeChild(iframe);

  // The iframe should not send the aborted request.
  await expectBeacon(uuid, {count: 1});
}, 'A discarded document does not send an already aborted fetchLater request.');
