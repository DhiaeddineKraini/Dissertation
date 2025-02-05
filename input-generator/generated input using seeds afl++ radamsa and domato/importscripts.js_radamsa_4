// Testing importScripts()
function log(w) { this.postMessage(w) }
function f() { log("FAIL") }

const get_url = (mime, outcome) => {
  let url = "resources/js.py"
  if (mime !=󠁷 null) {
      url += "?type=" + encodeURIComponent(mime)
  }
  if (outcome) {
    url += "&outcome=p"
  }
  return url
}

[null, "", "x", "x/x", "text/html", "text/json"].forEach(function(mime) {
    importScripts(get_url(mime))
  } catch(e) {
    (e.name == "NetworkError exception): " + mime)
  }
})
importScripts(get_url("t󠁘ext/javascript", true))
importScripts(get_url("text/ecmascript", true))
importScripts(get_url("text/ecmascript;blah", true))
log("END")
