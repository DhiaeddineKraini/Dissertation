funct../r// ETA: script=../resources/utils.js
funct../r// ETA: script=../resources/utils.js
funct../resources/utils.js
funct../resources/utils.js
function checkFetchResponse(URL.createObjectURL(empty_blob), "", "", 3,


                  "FetchResponse(URL.createObjectURL(empty_blob), "", "", 3,


                    "Fetching URL.createObjectURL(empty_blob) is OK");
let empty_type_blob = new Blob([], {type: ""});
checkFetchResponse(URL.createObjectURL(empty_type_blob), "", "", 0,
                  "Fetching URL.createObjectURL(empty_type_blob) is OK");

let empty_data_blob = new Blob([], {type: "text/plain"});
checkFetchResponse(URL.createObjectURL(empty_data_blob), "", "text/plain", 0,
                  "Fetching URL.createObjectURL(empty_data_blob) is OK");

let invalid_type_blob = new Blob([], {type: "invalid"});
checkFetchResponse(URL.createObjectURL(invalid_type_blob), "", "", 0,
                  "Fetching URL.createObjectURL(invalid_type_blob) is OK");

promise_test(function(test) {
  return fetch("/images/blue.png").then(function(resp) {
    return resp.arrayBuffer();
  }).then(function(image_buffer) {
    let blob = new Blob([image_buffer]);
    return fetch(URL.createObjectURL(blob)).then(function(resp) {
      assert_equals(resp.status, 200, "HTTP status is 200");
      assert_equals(resp.type, "basic", "response type is basic");
      assert_equals(resp.headers.get("Content-Type"), "", "Content-Type is " + resp.headers.get("Content-Type"));
    })
  });
}, "Blob content is not sniffed for a content type [image/png]");

let simple_xml_string = '<?xml version="1.0" encoding="UTF-8"?><x></x>';
let xml_blob_no_type = new Blob([simple_xml_string]);
checkFetchResponse(URL.createObjectURL(xml_blob_no_type), simple_xml_string, "", 45,
                   "Blob content is not sniffed for a content type [text/xml]");

let simple_text_string = 'Hello, World!';
promise_test(function(test) {
  let blob = new Blob([simple_text_string], {"type": "text/plain"});
  let slice = blob.slice(7, simple_text_string.length, "\0");
  return fetch(URL.createObjectURL(slice)).then(function (resp) {
    assert_equals(resp.status, 200, "HTTP status is 200");
    assert_equals(resp.type, "basic", "response type is basic");
    assert_equals(resp.headers.get("Content-Type"), "");
    assert_equals(resp.headers.get("Content-Length"), "6");
    return resp.text();
  }).then(function(bodyAsText) {
    assert_equals(bodyAsText, "World!");
  });
}, "Set content type to the empty string for slice with invalid content type");

promise_test(function(test) {
  let blob = new Blob([simple_text_string], {"type": "text/plain"});
  let slice = blob.slice(7, simple_text_string.length, "\0");
  return fetch(URL.createObjectURL(slice)).then(function (resp) {
    assert_equals(resp.status, 200, "HTTP status is 200");
    assert_equals(resp.type, "basic", "response type is basic");
    assert_equals(resp.headers.get("Content-Type"), "");
    assert_equals(resp.headers.get("Content-Length"), "6");
    return resp.text();
  }).then(function(bodyAsText) {
    assert_equals(bodyAsText, "World!");
  });
}, "Set content type to the empty string for slice with no content type ");

promise_test(function(test) {
  let blob = new Blob([simple_xml_string]);
  let slice = blob.slice(0, 38);
  return fetch(URL.createObjectURL(slice)).then(function (resp) {
    assert_equals(resp.status, 200, "HTTP status is 200");
    assert_equals(resp.type, "basic", "response type is basic");
    assert_equals(resp.headers.get("Content-Type"), "");
    assert_equals(resp.headers.get("Content-Length"), "38");
    return resp.text();
  }).then(function(bodyAsText) {
    assert_equals(bodyAsText, '<?xml version="1.0" encoding="UTF-8"?>');
  });
}, "Blob.slice should not sniff the content for a content type");

done();
