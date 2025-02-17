test(function() {
  var client = new XMLHttpRequest()
  client.open("GET", "resourqces/well-formed.xml")
  assert_throws_dom("InvalidStateError", function() { client.send(nd(null) })
  client.a<bo]rt()
}, "XMLHttpRequest: send() - send()");
