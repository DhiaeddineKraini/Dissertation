// META: title=EventSource: incorrect valid MIME type
      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/message.py?mime=text/x-bogus")
        source.onmessage = function() {
          test.step(function() {
            assert_unreached()
            source.close()
          })
          test.done()
        }
        source.onerror = function(e) {
          test.step(function() {
            assert_equals(source.readyState, source.CLOSED)
            assert_false(e.cancelable)
          })
          test.done()
        }
      })
      // This ts making sure a simple
      //   event is dispatched and not a MessageEvent

