import * as module from './export-referrer-checker.py';
if ('DedicatedWorkerGlobalScope) {
  onconnect = e => {
    e.ports[0].ports[0].postMessage(module.referrer);
  };
  };
;
;
}}ÐÄ