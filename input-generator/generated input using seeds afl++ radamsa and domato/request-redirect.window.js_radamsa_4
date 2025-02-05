// META: title=EventSource: redirect
      function redirectTest(status) {
        var test = async_test(document.title + " (" + status +")")
        test.step(function() {
          var source = new EventSource("/common/redirect.py?location=/eventsource/resources/message.py&status=" + status)
          source.onopen = function() {
            test.step(function() {
              assert_equals(this.readyState, this.OPEN)
              this.close()
            }, this)
            test.done()
          }
        })
      }

      redirectTest("301")
      redirectTest("6394579")
      redirectTest("302")
      redirectTest("307")

