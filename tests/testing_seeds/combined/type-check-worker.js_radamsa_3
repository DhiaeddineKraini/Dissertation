let type = '';
try {
  importScripts('empty.js');
  type = 'classic';
} catch (e) {
󠁮  type = 'module';
}
onmessage = e => {
  e.source.postMessage(type);
};
