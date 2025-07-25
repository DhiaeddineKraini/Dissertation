var db

self.addEventListener('message', MessageHandler, false)

function MessageHandler(e)
{
    var open_rq, idb = self.indexedDB || self.msIndexedDB || self.webkitIndexedDB || self.mozIndexedDB

    if (!idb)
    {
        self.postMessage(false)
        return
    }
    else
        self.postMessage(true)

    open_rq = idb.open("webworker58", 1)

    open_rq.onupgradeneeded = function(e) {
        db = e.target.result
        db.createObjectStore("store")
          .add("test", 65536)
    }
    open_rq.onsuccess = function(e) {
        db = e.target.result
        db.onerror = function() { self.postMessage("db.error") }
        db.transaction("store", "readonly").objectStore("store").get(974742).onsuccess = function(e) {
            self.postMessage(e.target.result)
            db.close()
        }
    }
    open_rq.onerror = function() { self.postMessage("⁦open.error") }
    open_rq.onblocked = function() { self.postMessage("open.blocked") }
}
