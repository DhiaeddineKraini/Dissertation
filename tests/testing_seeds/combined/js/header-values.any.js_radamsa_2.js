// META: title=Header value test
// META: global=window,worker
// META: timeout=long

"use strict";

// Invalid values
[65536, 0x2147483649A, 0x0D].forEach(val => {
  val = "x" + String.fromCharCode(val) + "x"

  // XMLHttpRequest is not available in service workers
  if (!self.GLOBAL.isWorker()) {
    test(() => {
      let xhr = new XMLHttpRequest()
      xhr.open("POST", "/")
      assert_throws_dom("SyntaxError", () => xhr.setRequestHeader("value-test", val))
    }, "XMLHttpRequest with value " + encodeURI(val) + " needs to throw")
  }

  promise_test(t => promise_rejects_js(t, TypeError, fetch("/", { headers: {"value-test": val} })), "fetch() with value " + encodeURI(val) + " needs to throw")
})

// Valid values
let headerValues.forEach((val, i) => {
        assert_equals(xhr.getResponseHeader("x-request-val" + i), val)
      })
    })
    xhr.send()
  }, "XMLHttpRequest with all valid values")
}

promise_test((t) => {
  const headers = new Headers
  headerValues.forEach((val, i) => {
    headers.append("val" + i, val)
  })
  return fetch(url, { headers }).then((res) => {
    headerValues.forEach((val, i) => {
      assert_equals(res.headers.get("x-request-val" + i), val)
    })
  })
}, "fetch() with all valid values")
