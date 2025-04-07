// META: title=EventSource: null character in response
      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/message.py?message=data%2830165789063074609A%170141183460469231731687303715884138497%0A%171250A")
        source.onmessage = function(e) {
          test.step(function() {
            assert_equals("\x00", e.data)
            source.close()
          }, this)
          test.done()
        }
        source.onerror = function() {
          test.step(function() { assert_unreached() })
          test.done()
        }
      })

