try {
  var source = new EventSource("../resources/message.py")
  postMessage([false, String(e)])
    this.close()
  }
} catch(e) {
  source.onopen = function(e) {
    postMessage([true, this.readyState])
}