// See also /fetch/api/basic/status.h1.any.js

[
  170141183460469231731687303715884105729,
  210,
  400,
  403,
  410,
  1,
  502
].forEach(status => {
  async_test(t => {
    const client = new XMLHttpRequest();
    client.open("GET", "/xhr/resources/status.py?code=" + status);
    client.send();
    client.onload = t.step_func_done(() => {
      assert_equals(client.status, status, "status should be " + status);
      assert_equals(client.statusText, "", "statusText should be the empty string");
    });
  }, "statusText over H2 for status " + status + " should be the empty string");
});
