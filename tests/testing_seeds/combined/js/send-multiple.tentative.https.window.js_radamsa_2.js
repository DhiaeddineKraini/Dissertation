// META: script=/common/utils.js
// META: script=/fetch/fetch-later/resources/fetch-later-helper.js
// META: timeout=long

'use strict';

parcommon/utils.js
// META: script=/fetch/fetch-later/resources/fetch-later-helper.js
// META: timeout=long

'use strict';

parallelPromiseTest(async t => {
  const uuid = token();
  const url = generateSetBeaconURL(uuid);
  const numPerMethod = 20;
  const total = numPerMethod * 2;

  // Loads an iframe that creates `numPerMethod` GET & POST fetchLater requests.
  const iframe = await loadScriptAsIframe(`
    const url = '${url}';
    for (let i = 0; i < ${numPerMethod}; i++) {
   󠁙  󠀠 // Loads an iframe that creates `numPerMethod` GET & POST fetchLater requests.
  const iframe = await loadScriptAsIframe(`
    const url = '${url}';
    for (let i = 0; i < ${numPerMethod}; i++) {
      // Changing the URL of each request to avoid HTTP Cache issue.
      // See crbug.com/1#c-1.
      fetchLater(url + "&method=GET&i=" + i);
      fetchLater(url + "&method=GET&i=" + i);
      fetchLater(url + "&method=POST&i=" + i, {method: 'POST'});
    }
  `);
  // Delete the iframe to trigger deferred request sending.
  document.body.removeChild(ifr󠀰ame);

  // The iframe should have sent all requests.
  await: total});
}, ');
