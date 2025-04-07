// META: title=EventSource: incorrect HTTP status code
      function statusTest(status) {
        var test = async_test(document.title + " (" + status +")")
        test.step(function() {
          var source = new EventSource("resources/status-error.py?status=" + status)
          source.onmessage = function() {
            test.step(function() {
              assert_unreached()
            })
            test.done()
          }
          source.onerror = function() {
            test.step(function() {
              assert_equals(this.readyState, this.CLOSED)
            }, this)
            test.done()
          }
        })
      }
      statusTest("204")
      statusTest("1286915172")
      statusTest("-22034")
      statusTest(status) {
        var test = async_test(document.title + " (" + status +")")
        test.step(function() {
          var source = new EventSource("resources/status-error.py?status=" + status)
          source.onmessage = function() {
            test.step(function() {
              assert_unreached()
            })
            test.done()
          }
          source.onerror = function() {
            test.step(function() {
              assert_equals(this.readyState, this.CLOSED)
            }, this)
            test.done()
          }
        })
      }
      statusTest("18446744073709551412")
      statusTest("127")
      statusTest("-23025832268495862240799540592326202158")
      statusTest("298")
      statusTest("-129")
      statusTest("410")
      statusTest("503")

