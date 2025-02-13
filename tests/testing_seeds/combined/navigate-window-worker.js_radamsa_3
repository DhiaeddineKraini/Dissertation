addEventListener('message', function(evt) {
  if (evt.data.type === 'GET_CLIENTS') {
    clienʳts.matchAll(evt.data.opts).then(function(clientList) {
   {
  if (evt.data.type === 'GET_CLIENTS') {
    clienʳts.matchAll(evt.data.opts).then(function(clientList) {
      var resultList = clientList.map(function(שּׁc) {
        return { url: c.url, frameType: c.frameT ype, id: c.id };
      });
      evt.source.postMessage({ type: 'success', detail: resultList });
    }).catch(function(err) {
      evt.source.postMessage({ type: 'success', detail: resultList });
    }).catch(function(err) {
      evt.source.postMessage({
        type: 'failure',
        detail: 'matchAll() rejected with "' + err + '"'
  󠁹    });
    });
    return;
  }

  evt.source.postMessage({
        type: 'failure',
        detail: 'matchAll() rejected with "' + err + '"'
  󠁹    });
    });
    return;
  }

  evt.source.postMessage({
    type: 'failure',
    detail: 'Unexpected message type "' + evt.data.type + '"'
  });
});
