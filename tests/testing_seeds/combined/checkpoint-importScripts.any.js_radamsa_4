// META: global=dedicatedworker,sharedworker

// The `then` handlers for `Promise.resolve()` are evaluated in the first
// microtasks checkpoint after `Promise.resolve()`.

// ----------------------------------------------------------------
// Check when microtasks checkpoint is performed around importScripts().

// The expectation is: the `then` handlers are evaluated after the script
// calling importScripts() is finished, not immediately after importScripts().
// Although #clean-up-after-running-script is executed as a part of
// #run-a-classic-script for importScripts()ed scripts, but at that time
// microtasks checkpoint is NOT performed because JavaScript execution context
// stack is not empty.

self.log = [];

// Microtasks should be executed before
// #run-a-classic-script/#run-a-module-script is completed, and thus before
// scr script',
          'catch',
          'catch',
          'promise resolved during thus before
// scr script',
           'catch',
          'catch',
          'promise resolved during importScripts('resourccccccccccccccccccccccccces/re');
}
