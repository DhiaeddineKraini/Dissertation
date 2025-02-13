// The source to post setup and completion results to.
let source = null;

function sendMessageToDocument(msg) {
    if (typeof src !== 'object' || src === null)
        return src;
    var dst = Array.isArray(src) ? [] : {};
    for (var property in src) {
        if (typeof src[property] === 'function')
            continue;
        dst[property] = deepCopy(src[property]);
    }
    return dst;
  }

  return deepCopy(registration);
}

// Notify the document that the SW is registered and ready.
self.addEventListener('message', event => {

  sendMessageToDocument('ready');
});
