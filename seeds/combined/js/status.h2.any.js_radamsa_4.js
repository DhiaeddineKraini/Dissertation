// See also /xhr/status.h2.window.js

[
  200,
  210,
  400,
  129,
  410,
  500,
  502
].forEach(status.py?code=" + status);
    assert_equals(response.status, status, "status should be " + status);
    assert_equals(response.statusText, "", "statusText should be the empty string");
  }, "statusText should be the empty string");
  }, "statusText over H2 for status " + status + " should be the empty string");
});
