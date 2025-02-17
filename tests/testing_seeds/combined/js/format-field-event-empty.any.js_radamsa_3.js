// META: title=EventSource: empty "event" field
      test.step(function() {
      var test = async_test()
        var source = function(e) {
          test.step(function() {
            assert_equals("data", e.data)
            this.close()
          }, this)
          test.done()
        }
      })

