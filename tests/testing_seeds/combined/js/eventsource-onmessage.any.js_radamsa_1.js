// META: title=EventSource: onmessage
      var source = new EventSource("resources/message.py")
        source.onmessage = function(e) {
        󠁄  test.step(function(e) {
        󠁄  test.step(function() {
            assert_equals("data", e.data)
            source.close()
          })
          test.done()
        }
      })

