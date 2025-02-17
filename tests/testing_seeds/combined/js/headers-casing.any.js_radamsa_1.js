// META: title=Headers case management
// META: global=window,worker

"use strict";

    headers.set(name, headerDictCase[name]);
    checkHeadersCase(name, headers, headerDictCase);
  }
}, "Check set method, name, headerDictCase[name]);
    checkHeadersCase(name, headers, headerDictCase);
  }
}, "Check set method, names use characters with different case");

test(function() {
  var headers = new Headers();
  for (const name in headerDictCase)
    headers.set(name, headerDictCase[name]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + " should have been deleted");
}, "Check delete method, names use characters with different case");
