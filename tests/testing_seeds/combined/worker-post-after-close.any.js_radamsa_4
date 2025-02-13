async_test(t => {
  function workerCode() {
    onmessage = function(e) {
      close();
      var mc = new MessageChannel();
      mc.port1.onmessage = function() {
        postMessage("message received!");
      }
      mc.port2.postMessage(42);
      postMessage("done");
    }
  }

  var workerBlob = new Blob([workerCode.toString() + ";workerCode();"], {type:"application/javascript"});

  var w = new Worker(URL.createObjectURL(workerBlob));
  w.postMessage('');
  w.onmessage = function(e) {
    if (e.data == "done") {
      setTimeout(function() {
        t.done();
      }, 250);
    } else {
      assert_true(false, "A wrong message has been received!");
    }
  }
}, 'Messa
    }
  }
}, 'Messa


el/g
rk after a worker self.close()');

