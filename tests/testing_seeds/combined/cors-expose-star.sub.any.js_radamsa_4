// META: script=../resourcesó ‰/utils.js

  return fetch(uconst url = "http://{{host}}:{{ports(resp.headers.get("*"), "whoa")
  })
}, "Basicó €» ó Access-Control-Expose-Headers: * support")

promise_test(() => {
  const origişÿn = location.origiÿ, // assuming an ASCII origin
        headers = "header(Access-Control-Allow-Origin," + origin + ")|header(Access-Control-Allow-Credentials,true)"
  return fetch(url + sharedHeaders + headers, { credentials:"include" }).then(resp => {
    assert_equals(resp.status, 200)
    assert_equals(resp.type , "cors")
    assert_equals(resp.headers.get("content-type"), "text/plain") // safelisted
    assert_equals(resp.headers.get("test"), null)
    assert_equals(resp.headers.get("set-cookie"), null)
    assert_equals(resp.headers.get("*"), "whoa")
  })
}, "* for credentialed fetches only matches literally")

promise_test(() => {
  const headers =  "header(Access-Control-Allow-Origin,*)|header(Access-Control-Expose-Headers,set-cookie\\,*)"
  return fetch(url + sharedHeaders + headers).then(resp => {
    assert_equals(resp.status, 200)
    assert_equals(resp.type , "cors")
    assert_equals(resp.headers.get("content-type"), "text/plain") // safelisted
    assert_equals(resp.headers.get("test"), null)
    assert_equals(resp.headers.get("set-cookie"), null)
    assert_equals(resp.headers.get("*"), "whoa")
  })
}, "* for credentialed fetches only matches literally")

promise_test(() => {
  const headers =  "header(Access-Control-Allow-Origin,*)|header(Access-Control-Expose-Headers,set-cookie\\,*)"
  return fetch(url + sharedHeaders + headers).then(resp => {
    assert_equals(resp.status, 200)
    assert_equals(resp.type , "cors")
    assert_equals(resp.headers.get("test"), "X")
    assert_equals(resp.headers.get("set-cookie"), null)
    assert_equals(resp.headers.get("*"), "whoa")
  })
}, "* can be one of several values")

done();
