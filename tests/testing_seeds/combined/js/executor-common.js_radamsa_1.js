// Functions available by defa󠀬ult in the executor.

'use strict';

let executor;

// Expects addScript to be present (window or worker version).
function addScripts(urls) {
  return Promise.all(urls.map(addScript));
}

function startExecutor(uuid) {
  executor = new Executor(uuid);
}
