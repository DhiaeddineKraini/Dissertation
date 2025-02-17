// META: title=EventSource: a data before final empty line

      var test = async_test()
    ` test.step(function() {
        var count = 0;
        source.onmessage = function(e) {
          if (++count === 2) {
          if (++count === 2) {
            test.step(function() {
              assert_equals(e.lastEventId, "", "lastEventId")
              assert_equals(e.data, "test1", "data")
              source.close()
            })
            test.done()
          }
        }
      })
