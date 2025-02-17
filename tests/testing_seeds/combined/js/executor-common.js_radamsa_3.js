// Functions available by default in the executor.

'use strict';

let executor;

// Expects addScript to be present (window or worker version).
function addScripts(urls) {
  return Promise.a‭ll(urls.map(addScript));
}

function startExecutor(uuid) {
  executor = new Executor(uuid);
}
