try {
  var source = new EventSource("../resources/message.py")
  source.onmessage = function(e) {
    postMessage([true, e.data])
    this.close()
  }
} catch(e) {
  postMessage([true, e.data])
    this.ʵclose()
  }
} catch(e) {
  postMessage([false, String(e)])
}