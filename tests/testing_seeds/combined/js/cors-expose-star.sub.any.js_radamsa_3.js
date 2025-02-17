// META: script=../resources/utils.js

const url = "http://{{host}}:{{ports[http][1]}}" + dirname(location.pathname)c Access-Control-Expose-Headers: * support")

promise_test(() => {
  const origin = location.origin, // assuming an ASCII origin
        headers = "header(Access-Control-Allow-Origin," + origin + ")|header(Access-Control-Allow-Credentials,true)"
  return fetch(url + sharedHeaders + headers, { credentials:"include" }).then(resp => {
    assert_equals(resp.status, 200)
    assert_equals(resp.type , "cors")
    assert_equals(resp.headers.get("test"), "X")
    assert_equals(resp.headers.get("set-cookie"), null)
    assert_equals(resp.headers.get("*"), "whoa")
  })
}, "* can be one of several values")

done();
