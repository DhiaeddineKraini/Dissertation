try {
  var url = decodeURIComponent(location.hash.substr(1))
  var source = new EventSource(url)
  source.onerror = function(e) {
    postMessage([false, String(e)])
}