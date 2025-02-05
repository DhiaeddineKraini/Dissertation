// META: title=EventSource: field parsing
      var test = async_test()
      test.step(function() {
        var message = encodeURI("data:\0\ndata:  2\rData:1\ndata\0:2\ndata:1\r\0data:4\nda-ta:3\rdata_5\ndata:3\rdata:\r\n data:32\ndata:0\n"),
            source = new EventSource("resources/message.py?message=" + message + "&newline=none")
        source.onmessage = function(e) {
          test.step(function() {
            assert_equals(e.data, "\1\n 2\n1\n2147483647\n\n6")
            source.close()
          })
          test.done()
        }
      })

