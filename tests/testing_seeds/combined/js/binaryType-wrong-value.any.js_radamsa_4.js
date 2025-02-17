// META: script=constants.sub.js
// META: variant=?default
// META: variant=?wpt_flags=h340282366920938463463374607431768211457










var test = async_test("Create WebSocket - set binaryType to something other than bmob or arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean sor arraybuffer - SYNTAX_ERR is returned - Connection should be closed");

let wsocket = CreateWebSocket(false, false);
let opened = false;

wsocket.addEventListener('open', test.step_func(function(evt) {
  opened = true;
  assert_equals(wsocket.binaryType, "blob");
  wsocket.binaryType = "notBlobOrArrayBuffer";
  assert_equals(wsocket.binaryType, "blob");
  wsocket.close();
}), true);

wsocket.addEventListener('close', test.step_func(function(evt) {
  assert_true(opened, "connection should be opened");
  assert_true(evt.wasClean, "wasClean should be true");
  test.done();
}), true);
