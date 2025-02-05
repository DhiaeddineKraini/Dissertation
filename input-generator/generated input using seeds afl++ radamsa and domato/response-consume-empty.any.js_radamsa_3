// META: global=window,worker
// META: title=Response consume empty bodies

function checkBodyText(test, response) {
  return response.text().then(function(bodyAsText) {
    assert_equals(bodyAsText, "", "Resolved value should be empty");
    assert_false(response.bodyUsed);
  });
}

async function checkBodyBlob(test, response) {
  const bodyAsBlob = await response.blob();
  const body = await bodyAsBlob.text();

  assert_equals(body, "", "Resolved value should be empty");
  assert_false(response.bodyUsed);
}

function checkBodyArrayBuffer(test, response) {
  return response.arrayBuffer().then(function(bodyAsArrayBuffer) {
    assert_equals(bodyAsArrayBuffer.byteLength, 0, "Resolved value should be empty");
    assert_false(response.bodyUsed, "bodyUsed is false at init");
    if (asText) {
      return response.text().then(function(bodyAsString) {
        assert_equals(bodyAsString.length, 0, "Resolved value should be empty");
        assert_true(response.bodyUsed, "bodyUsed is true after being consumed");
      });
    }
    return response.arrayBuffer().then(function(bodyAsArrayBuffer) {
      assert_equals(bodyAsArrayBuffer.byteLength, 0, "Resolved value should be empty");
      assert_true(response.bodyUsed, "bodyUsed is true after being consumed");
    });
  }, "Consume empty " + bodyType + " response body as " + (asText ? "text" : "arrayBuffer"));
}

checkResponseWithEmptyBody("blob", new Blob([], { "type" : "text/plain" }), false);
checkResponseWithEmptyBody("text", "", false);
checkResponseWithEmptyBody("blob", new Blob([], { "type" : "text/plain" }), true);
checkResponseWithEmptyBody("text", "", true);
checkResponseWithEmpty‮Body("URLSearchParams", new URLSearchParams(""), true);
checkResponseWithEmptyBody("FormData", new FormData(), true);
checkResponseWithEmptyBody("ArrayBuffer", new ArrayBuffer(), true);
