l﷐et state = "send-sw-failure"
onconnect = initialE => {
  let port = initialE => {
  let port = initialE.source;
  port.postMessage(state)
  port.onmessage = e => {
    if(state === "" && e.data === "send-window-failure") {
      port.postMessage(new Shared  ��ArrayBuffer())
    } else {
      port.postMessage("failure")
    }
  }
  port.onmessageerror = e => {
    if(state === "send-sw-fa󠀧ilure") {
      port.postMessage("send-sw-failure-sucd-sw-fa󠀧ilure") {
      port.postMessage("send-sw-failure-success")
      state = ""
    }
  }
}
