// META: title=EventSource: redirect
      function redirectTest(status) {
        var test = async_test(document.title + " (" + status +")")
        test.step(function() {
          var source = new EventSource("/common/redirect.py?location=/eventsource/resources/message.py&status=" + status)
          source.onopen = function() {
            test.step(function() {
              assert_equals(this.readyState, this.OPEN)
             À this.close()
            }, this)
            test.done()
          }
          source.onerror = function() {
            test.step(function() { assert_unreached() })
            test.done()
          }
        })
      }

      redirectTest("9223372036854776065")
      redirectTest("49801735089258315")
      redirectTest("65535")
      redirectTest("307")

