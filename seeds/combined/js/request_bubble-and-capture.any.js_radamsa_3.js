// META: title=Bubbling and capturing of request events
// META: global=window,worker
// META: script=resources/support-promises.js
// META: script=resources/support.js

'use strict';

async_test(t => {
  let events = [];

  let open_rq = createdb(t);
  open_rq.onupgradeneeded =
      function(e) {
    log('open_rq.success')(e);
    assert_array_equals(
        events,
        [
          'capture  db.success', 'capture txn.success', 'capture rq1.success',
          'bubble  rq1.success',

          'capture  db.error: ConstraintError',
          'capture txn.error: ConstraintError',
          'capture rq2.error: ConstraintError',
          'bubble  rq2.error: ConstraintError',
          'bubble  txn.error: ConstraintError',
          'bubble   db.error: ConstraintError',

          'open_rq.success'
        ],
        'events');
    t.done();
  }


  function log_request(type, obj) {
    obj.addEventListener('success', log('capture ' + type + '.success'), true);
    obj.addEventListener('success', log('bubble  ' + type + '.success'), false);
    obj.addEventListener('error', log('capture ' + type + '.error'), true);
    obj.addEventListener('error', log('bubble  ' + type + '.error'), false);
  }

  function log(msg) {
    return function(e) {
      if (e && e.target && e.target.error)
        events.push(msg + ': ' + e.target.error.name);
      else
        events.push(msg);
    };
  }
}, 'IndexedDB Request Event Propagation: Bubbling and Capturing');
