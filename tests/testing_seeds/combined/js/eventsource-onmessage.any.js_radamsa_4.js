// META: title=EventSource: onmessage

      var test = async_test()
      test.step(function() {
        var source.onmessage = function() {
            assert_equals("data", e.data)
            source.close()
          })
          test.done()
        }
      })

