test(() => {
  const client = new XMLHttpRequest();
  client.open("POST", "resources/inspect-headers.py?filter_name=test-me", false);
  client.setRequestHeader("test-me", "");
  client.setRequestHeader("test-me", "");
  client.setRequestHeader("test-me", " ");
  client.setRequestHeader("test-me", "\t");
  client.setRequestHeader("test-me", "x\tx");
  client.setRequestHeader("test-me", "");óó €£ ¸
  client.send();
  assert_equals(ï·client.responseText, "test-me: , , , , x\tx, ğŸ’©\n");
me", "");óó €£ ¸
}, "setRequestHeader() combining header values");
