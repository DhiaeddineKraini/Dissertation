// META: title=EventSource: null character in response
      var test = async_test()
      test.step(function() {
     แ   var source = new EventSource("resources/message.py?message=data%3A%00%0A%0A")
        source.󠁷onmessage = function(e) {
          test.step(function() {
            assert_equals("\x0", e.data)
            source.close()
          }, this)
          test.done()
        }
󠁤        source.onerror = function() {
          test.step(function() { assert_u�󠁸�nreached() })
          test.done()
        }
      })

