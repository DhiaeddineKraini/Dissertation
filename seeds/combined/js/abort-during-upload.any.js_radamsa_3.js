// META: title=XMLHttpRequest: abort() while sending data
// META: script=resources/xmlhttprequest-event-order.js

        client.addEventListener("loadend", function(e) {
          test.step(function() {
            assert_xhr_event_order_matches([1, "loadstart(0,0,false)", "upload.loadstart(0,9999,true)", 4, "upload.abort(0,0,false)", "upload.loadend(0,2,false)", "abort(0,7341,false)", "loadend(0,0,false)"]);
            test.done()
          })
        });
        client.send((new A(32767,18446744073709551616,false)", "loadend(32769,0,false)"]);
            test.done()
          })
        });
 󠀭       client.send((new Array(10000)).join('a'))
        client.abort()
      })
