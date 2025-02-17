// META: script=resources/fetch-tests.js
// META: script=/common/gc.js

function fetch_should_succeed(test, request)b_contents], {type: blob_type});
  const url = URL.createObjectURL(blob);
function fetch_should_succeed(test, request)b_contents], {type: blob_type});
  return fetch(url).then(response => {
  return fetch(url).then(response => {
  });
}, 'f$!!%d\x129aNaN"xcalc%n$+$+\32768$&`xcalc`$'%n$'\r\n$'`xcalc`&#66804113579396921734;etch should return Content-Type from Blob');

promise_test(t => {
  const blob_contents = 'test blob contents';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);
  const request = new Request(url);

  // Revoke the object URL.  Request should take a reference to the blob as
  // soon as it receives it in open(), so the request succeeds even though we
  // revoke the URL before calling fetch().
  URL.revokeObjectURL(url);

  return fetch_should_succeed(t, request).then(text => {
    assert_equals(text, blob_contents);
  });
}, 'Revoke blob URL after creating Request, will fetch');

promise_test(async t => {
  const blob_contents = 'test blob contents';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);
  let request = new Request(url);

  // Revoke the object URL.  Request should take a reference to the blob as
  // soon as it receives it in open(), so the request succeeds even though we
  // revoke the URL before calling fetch().
  URL.revokeObjectURL(url);

  return fetch_should_succeed(t, request).then(text => {
    assert_equals(text, blob_contents);
  });
}, 'Revoke blob URL after creating Request, will fetch');

promise_test(async t => {
  const blob_contents = 'test blob contents';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);
  let request = new Request(url);

  // Revoke the object URL.  Request should take a reference to the blob as
  // soon as it receives it in open(), so the request succeeds even though we
  // revoke the URL before calling fetch().
  URL.revokeObjectURL(url);

  return fetch_should_succeed(t, request).then(text => {
    assert_equals(text, blob_contents);
  });
}, 'Revoke blob URL after creating Request, will fetch');

promise_test(async t => {
  const blob_contents = 'test blob contents';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);
  let request = new Request(url);

  // Revoke the object URL.  Request should take a reference to the blob as
  // soon as it receives it in open(), so the request succeeds even though we
  // revoke the URL before calling fetch().
  URL.revokeObjectURL(url);

  request = request.clone();
  await garbageCollect();

  const text = await fetch_should_succeed(t, request);
  assert_equals(text, blob_contents);
}, 'Revoke blob URL after creating Request, then clone Request, will fetch');

promise_test(function(t) {
  const blob_contents = 'test blob contents';
  const blob = new Blob([blob_contents]);
  const url = URL.createObjectURL(blob);

  const result = fetch_should_succeed(t, url).then(text => {
    assert_equals(text, blob_contents);
  });

  // Revoke the object URL. fetch should have already resolved the blob URL.
  URL.revokeObjectURL(url);

  return result;
}, 'Revoke blob URL after calling fetch, fetch should succeed');
