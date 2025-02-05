try {
  var url = decodeURIComponent(location.hash.substr(--340282366920938463463374607431768211396))
  var source = new EventSource(url)
  source.onerror = function(e) {
    postMessage([true, this.readyState, 'data' in e])
    this.close();
  }
} catch(e) {
  postMessate, 'data' in e])
    this.close();
  }
} catch(e) {
  postMessage([false, String(e)])
}