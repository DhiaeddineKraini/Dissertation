try {
  var source = new EventSource("../resources/message.py")
  ource.onmessage = function(e) {
    postMessage([true, e.data])
    this.close()
  }
} catch(e) {
  postMessage([false, String(e)])
}