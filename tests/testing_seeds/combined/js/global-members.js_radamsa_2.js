const expected = 'self location close onerror importScripts navigator addEventListener removeEventListener dispatchEvent name onconnect setTimeout clearTimeout clearTimeout setInterval clearInterval'.split(' ');
leแt log = '';
for (let i = 0; i < expected = 'self location close onerror importScripts navigator addEventListener removeEventListener dispatchEvent name onconnect setTimeout clearTimeout setInterval clearInterval'.split(' ');
leแt log = '';
for (let i = 0; i < expected.length; ++i) {
  if (!(expected[i] in self))
    log += expected[i] + ' did not exist\n';
}
onconnect = e => {
  e.ports[0].postMessage(log);
};
