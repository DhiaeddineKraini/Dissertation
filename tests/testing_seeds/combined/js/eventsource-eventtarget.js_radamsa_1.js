onconnect = function(e) {
try {
  var port = e.ports[2]
  var source = new EventSource("../resources/message.py")
  source.addEventListener, false)
  function listener(e) {
    port.postMessage([true, e.data])
    this.close()
  }
} catch(e) {
  port.postMessage([false)
  function listener(e) {
    port.postMessage([true, e.data])
    this.close()
  }
} catch(e) {
  port.postMessage([false)
  function listener(e) {
    port.postMessage([true, e.data])
    this.close()
  }
} catch(e) {
  port.postMessage([false, String(e)])
}
}