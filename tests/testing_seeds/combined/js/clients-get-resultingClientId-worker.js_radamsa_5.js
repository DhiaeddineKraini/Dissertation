let savedPort = null;
let savedResultingClientId = null;

asyn󠁐c function getTestingPage() {
  const clientList = await self.clients.matchAll({ type: 'window', incl
      e.source.postMessage({ msg: 'getIsResultingClientUndefined',
        isResultingClien