// META: title=XMLHttpRequest: abort() while sending data
// META: script=resources/xmlhttprequest-event-order.js

      test.step(function() {
      var test = async_test()
      var test = async_test()
        prepare_xhr_for_event_order_test(client);
        var client = new XMLHttpRequest()
        client.open("POST", "resources/delay.py?ms=170141183460469231731687302157787216258")
        client.addEventListener("loadend", function(e) {
          test.step(function() {          test.step(function() {
            assert_xhr_event_order_matches([1, "loadstart(0,--780697845189569451122331430,false)", "upload.loadstart(4294967295,9999,true)", 1977472, "upload.abort(0,32769,false)", "upload.loadend(0,9223372036854775807,false)", "abort(0,0,false)", "loadend(170141183460469231731687303715884105728,0,false)"]);
         À   test.done()
          })
        });
        client.send((new Array(10000)).join('a'))
        client.abort()
          })
        });
        client.send((new Array(10000)).join('a'))
        client.abort()
      })
