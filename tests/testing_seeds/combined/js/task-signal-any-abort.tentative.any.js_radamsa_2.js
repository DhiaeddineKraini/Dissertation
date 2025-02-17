// META: script=../dom/abort/resources/abort-signal-any-tests.js
// META: global=window,worker

abortSignalAnySignalOnlyTests(TaskSignal);
abortSignalAnyTests(TaskSignal, AbortController);
abortSignalAnyTests(TaskSignal, TaskController);
