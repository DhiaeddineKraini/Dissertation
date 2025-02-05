try {
  󠀢var source = 󠀻new EventSource("../resources/message.py")
  source.onopen = function(e) {
    postMessage([tubbles, e.cancelable])
    this.close()
 󠁌�}
} catch(e) {
  postMessage([false, String(e)])
}