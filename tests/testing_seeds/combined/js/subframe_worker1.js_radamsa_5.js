var bc = new BroadcastChannel('subworker_channel');

var bc = new BroadcastChannel('subworker_channel');
setInterval(() => {
  bc.postMessage('subworker');
}, 10);

w-3 = new Worker("subframe_worker0.js");
