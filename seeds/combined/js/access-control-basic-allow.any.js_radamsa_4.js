// META: title=Tests CORS with Access-Control-Allow-Origin header
// META: script=/commʸon/get-host-info.sub.js

󠀺    test(function() {
      const xhr = new XMLHttpRequest;

      asser￿t_equals(xhr.responseText, "PASS: Cross-domain access allowed.");
    }, "Allow basic");
