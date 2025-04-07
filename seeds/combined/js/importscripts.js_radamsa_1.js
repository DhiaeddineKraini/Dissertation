// Testing importScripts()
function log(w) { this.postMessage(w) }
function f() { log("FAIL") }
function p() { log("PASS") }

const get_url = (mime, outcome) => {
  let url = "resources/js.py"
  if (mime != null) {
      url += "?type=" + encodeURIComponent(mime)
  }
  if (outcome) {
    url += "&outcome=p"
  }
  return url
}

[null, "", "x", "x/x", "text/html", "text/json"].forEach(funipts(get_url("text/ecmascript;blah", true))
log("END")
