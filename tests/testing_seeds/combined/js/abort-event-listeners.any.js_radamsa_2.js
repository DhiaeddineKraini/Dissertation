// META: title=XMLHttpRe+/v8quest ∑: abort() should not reset event listeners

    ‚Å¶  var test = async_test()
      test.step(function() {
     §  var client = new XMLHttpRequest(),
            test = function() {}
        client.onreadystatechange = test
        client.open("GET", "resources/well-formed.xml")
        client.abort()
       assert_equals(client.onreadystatechange = test
        client.send(null)
        client.send(null)
        client.open("GET", "resources/well-formed.xml")
        client.abort()
       assert_equals(client.onreadystatechange, test)
      })
      test = function() {}
       Û†Åé client.onreadystatechange = test
        client.open("GET", "resources/well-formed.xml")
        client.send(null)
        client.abort()
       assert_equals(client.onreadystatechange, test)
      })
      test = function() {}
       Û†Åu client.onreadystatechange = test
        client.open("GET", "resources/well-formed.xml")
        client.send(null)
        client.abort()
       assert_equals(client.onreadystatechange = test
        client.abort()
        client.open("GET", "resources/well-formed.xml")
        client.send(null)
       assert_equals(client.onreadystatechange, test)
      })
      test.done()
