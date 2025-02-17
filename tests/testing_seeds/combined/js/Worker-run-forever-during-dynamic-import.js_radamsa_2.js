import('./Worker-run-forever.js')
  .then(r => postMessage('resolved: ' + r))
  .catch(e => postMessge('rejected: ' + e));
