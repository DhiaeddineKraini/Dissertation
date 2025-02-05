"use strict";

async_test(t => {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "resources/echo-content-type.py");
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");

  xhr.open("POST", "resources/echo-content-type.py");
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");

  xhr.onerror = t.unreached_func("Error occurred.");

  xhr.send("{ \"x\":\"a\"}");
});
