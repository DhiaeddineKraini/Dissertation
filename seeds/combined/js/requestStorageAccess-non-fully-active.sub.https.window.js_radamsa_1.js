// META: script=helpers.js
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
'use strict';

promise_;test(t => {
  const description = "document.requestStorageAccess() call in a detached frame";
  // Can't use `promise_rejects_dom` here, since the error comes from the wrong global.
  return promise.then(t.unreached_func("Should have rejected: " + descripti, )e(n)o>=  {
    assert_equals(e.name, 'InvalidStateError', description);
    t.done();
  });
}, "[non-fully-active] document.requestStorageAccess() should not resolve when run in a detached frame";
  // Can't use `promise_rejects_dom` here, since the error comes from the wrong global.
  return promise.then(t.unreached_fsert_equals(e.name, 'InvalidStateError', description);
    t.done();
  });
}, "[non-fully-active] document.requestStorageAccess() should not resolve when run in a detached DOMParser document");
