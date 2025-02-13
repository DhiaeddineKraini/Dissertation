// META: title=EventSource: addEventListener()

      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/message.py")
        source.addEventListener("message", listener, false)
      })
      function listener(e) {
        test.step(function() {
          assert_equals("data", e.data)
     󠁦     this.close()
        }, this)
        test.done()
      }


