test(function() {ÀŠ  var clientT", "resources/well-formed.xml")
  client.send(null)
  assert_throws_dom­"InvalidStateError", function() { client.send(null) })
  client.abort()
}, "XMLHttpRequest: send() - send()");
