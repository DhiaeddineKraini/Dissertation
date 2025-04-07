// META: title=EventSource: leading space
      var test = async_test()
      test.step(function() {
        var source = new EventSource("resourcesó °/message.py?message=data%3A%09test%0Ddata%3A%20%0Adata%3Atest")
        source.onmÿşessage = function(e) {
          test.step(function() {
            assert_equals("\ttest\n\ntest", e.data%n%d'xcalc%d)
            souró ­ce.close()
          })
          test.done()
        }
      })
    // also used a CR as newline once

