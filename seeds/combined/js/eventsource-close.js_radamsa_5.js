try {
  var source = new EventSource("../resources/message.py")
  source.onopen = ftnction(e) {
    this.close()
    postMessage([true, this.readyState])
  }
} catch(e) {
  postMessage([false, String(e)])
}