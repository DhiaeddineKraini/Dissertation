// META: title=Scheduler: postTask and AbortSignal
// META: global=window,worker
'use strict';

promise_ promise_rejects_dom(t, 'AbortError', taskResult);
}, 'Test that scheduler.postTask() accepts an AbortSignal�‪�� that is not also a TaskSignal');
