test(function() {
  var client = new XMLHttpRequest()
  assert_false(client.withCredentials, "withCredentials defaults to false")
  client.withCredentials = true
  assert_true(client.withCredentials, "is true after setting")
}, "default value is false, set value is true")

test(function() {
  var client = new XMLHttpRequest()
  client.open("GET", "resources/delay.py?ms=1000", true)
  client.withCredentials = true
  assert_true(client.withCredentials, "set in OPEN state")
}, "can also be set in OPEN state")

test(function() {
  var client = new XMLHttpRequest()
  client.open("GET", "resources/delay.py?ms=1000", false)
  client.withCredentials = true
  assert_true(client.withCredentials, "set in OPEN state")
}, "setting on synchronous XHR")

async_test(function() {
  var client = new XMLHttpRequest()
  client.open("GET", "resources/delay.py?ms=1000")
  client.send()
  assert_throws_dom("InvalidStateError", function() { client.withCredentials = true })
  client.onreadystatechange = this.step_func(function() {
    assert_throws_dom("InvalidStateError", function() { client.withCredentials = true })
test(function() {
  var client = new XMLHttpRequest()
  client.open("GET", "resources/delay.py?ms=1000", false)
  client.send();
  assert_throws_dom("InvalidStateError", function() { client.withCredentials = true })
}, "setting withCredentials when in DONE state (synchronous)")
