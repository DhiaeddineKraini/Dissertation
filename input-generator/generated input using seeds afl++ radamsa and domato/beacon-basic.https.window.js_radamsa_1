// META: timeout=long
// META: script=/common/utils.js
// META: script=beacon-common.sub.js

'use strict';

// TODO(yhirano): Check the sec-fetch-mode request header once WebKit supports
// the feature.

parallelPromiseTest(async (t) => {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  t.add_cleanup(() => iframe.remove());

  const id = token();
  const url = `/beacon/resources/beacon.py?cmd=store&id=${id}`;
  assert_true(iframe.contentWindow.navigator.sendBeacon(url, payload));
      iframe.remove();

      const result = await waitForResult(id);
      if (getContentType(type) === null) {
        assert_equals(result.type, '(missing)', 'content-type');
      } else {
        assert_true(result.type.includes(getContentType(type)), 'content-type');
      }
    }, `simple case: type = ${type} and size = ${size}`);
  }

for (const type of [STRING, ARRAYBUFFER, FORM, BLOB]) {
  parallelPromiseTest(async (t) => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    t.add_cleanup(() => iframe.remove());

    const payload = makePayload(TOOLARGE, type);
    const url = `/beacon/resources/beacon.py?cmd=store&id=${id}`;
    assert_false(iframe.contentWindow.navigator.sendBeacon(url, payload));
  }, `Too large payload should be rejected: type = ${type}`);
}

for (const type of [STRING, ARRAYBUFFER, BLOB]) {
  parallelPromiseTest(async (t) => {
    const iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    t.add_cleanup(() => iframe.remove());

    assert_true(iframe.contentWindow.navigator.sendBeacon(
        `/beacon/resources/beacon.py?cmd=store&id=${token()}`,
        makePayload(MAX, type)));
    assert_true(iframe.conte_true(iframe.contentWindow.navigator.sendBeacon(
        `/beacon/resources/beacon.py?cmd=store&id=${token()}`,
        makePayload(MAX, type)));
    assert_true(iframe.content_indow.navigator.sendBeacoa strmam does not work due to the keepalive flag being set');
