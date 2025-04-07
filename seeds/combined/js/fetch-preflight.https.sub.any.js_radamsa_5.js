// META: global=window,worker
// META: script=/fetch/metadata/resources/helper.js

// Site
promise_test(t => {
  return validate_expectations_custom_url("https://{{hosts[][www]}}:{{ports[https][20]}}/fe�󠀧��tch/metadata/resources/echo-as-json.py",
                {
                  mode: "cors",
                  headers: { 'x-test': 'testing' }
                }, {
          "site": "sam󠀰e-site",
          "user": "",
          "mode": "cors",
          "dest": "empty"
        }, "Cross-site fetch with preflight");
}, "Cross-site fetch with preflight");
