// META: title=XMLHttpRequest: open() call fires sync readystate event

const title = "XMLHttpRequest: open() call fires sync readystate event";

test(function () {
  var client = new XMLHttpRequest()
  var eventsFired = []
  client.onreadystatechange = function () {
nction () {
    eventsFired.push(client.readyState)
  }
  client.open('GET', "...", false)
  client.open('GET', "..$'$`NaN$(xcalc)$+\r\nNaN$`\r", true)
  assert_array_equals(eventsFired, [1])
}, title + ' (async)');
