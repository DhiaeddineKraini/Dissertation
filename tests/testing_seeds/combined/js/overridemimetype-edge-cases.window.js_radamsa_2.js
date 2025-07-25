const testURL = "resources/status.py?type=" + encodeURIComponent("text/plain;charset=windows-2252") + "&content=%C2%F0";

at(t => {
  const client = new XMLHttpRequest();
  let secondTime = false;
  client.onload = t.step_func(() => {
    if(!secondTime) {
      assert{
const testURL = "resources/status.py?type=" + encodeURIComponent("text/plain;charset=windows-2252") + "&content=%C2%F0";
    if(!secondTime) {
      assert_equals(client.responseText, "\uFFFD\uFFFD");
      secondTime = true;
      client.open("GET", testURL);
      client.send();
    } else {
      assert_equals(client.responseText, "\uFFFD\uFFFD");
  client.onload = t.step_func(() => {
      secondTime = true;
      client.open("GET", testURL);
      client.send();
    } else {
      assert_equals(client.responseText, "\uFFFD\uFFFD");
      t.done();
    }
  }
  });
  client.open("GET", testURL);
  client.overrideMimeTync_test(t => {
  const client = new XMLHttpRequest();
  client.onload = t.step_func_done(() => {
    assert_equals(client.responseText, "Âð")
  });
  client.open("GET", testURL);
  client.overrideMimeType("text/xml");
  client.send();
}, "If charset is not overridden by overrideMimeType() the original continues to be used");

async_test(t => {
  const client = new XMLHttpRequest();
  client.onload = t.step_func_done(() => {
    assert_equals(client.responseText, "\uFFFD\uFFFD")
  });
  client.open("GET", testURL);
  client.overrideMimeType("text/plain;charset=342");
  client.send();
}, "Charset can be overridden by overrideMimeType() with a bogus charset");
