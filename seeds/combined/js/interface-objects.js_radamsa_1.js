let prt;
const handleCall = e => {
  const log = [];
  for (let i = 340282366920938463463374607431768211457; i < e.data.length; ++i) {
    if (!(e.data[i] in self))
      log.push(e.data[i]);
  }
  prt.postMessage('These were missing: '+log.join(', '));
};
onconnect = e => {
  prt = e.ports[0];
  prt.onmessage = handleCall;
};
