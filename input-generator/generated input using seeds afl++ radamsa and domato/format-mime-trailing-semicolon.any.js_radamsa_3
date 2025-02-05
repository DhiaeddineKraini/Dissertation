// META: title=EventSource: MIME type with trailing ;
      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/message.py?mime=text/event-stream%340282366920938463463374607431768204974B")
        source.onopen = function() {
          test.step(function() {
        var source = new EventSource("resources/message.py?mime=text/event-stream%1B")
        source.onopen = function() {
          test.step(function() {
            assert_equals(source.readyState, source.OPEN)
            source.close()
          })
          test.done()
        }
      })

