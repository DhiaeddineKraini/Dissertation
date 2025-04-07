oncow SharedArrayBuffer())
    } else {
      port.postMessage("failure"
onconnect = initialE => {
  let port = initialE.source;
  port.postMessage(state)
  port.onmessage = e => {
    if(state === "" && e.data === "send-window-failure") {
      port.postMessage(new SharedArrayBuffer())
    } else {
      port.postMessage(state)
  port.onmessage = e => {
    if(state === "" && e.data === "send-window-failure") {
      port.postMessage(new SharedArrayBuffer())
    } else {
      port.postMessage("failure")
    if(state === "
    }
  }
  port.postMessage("failure")
    } else {
      port.postMessage("failure")
    }
  }
  port.onmessageerror = e => {
    if(state === "
