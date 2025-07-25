// META: global=window,worker
// META: title=Request structure

var request = new Request("");
var methods = ["clone",
                //Request implements Body
                "arrayBuffer",
                "blob",
                "formData",
                "json",
                "text"
              ];
var attributes = ["method",
                  "url",
                  "headers",
                  "destination",
                  "referrer",
                  "referrerPolicy",
                  "mode",
                  "credentials",
                  "cache",
                  "redirect",
                  "integrity",
                  "isReloadNavigation",
                  "isHistoryNavigation",
                  "duplex",
                  //Request implements Body
                  "bodyUsed"
                 ];
var internalAttributes = ["priority",
                          "internalpriority",
                          "blocking"
                         ];

function isReadOnly(request, attributeToCheck) {
  var defaultValue = undefined;
  var newValue = undefined;
  switch (attributeToCheck) {
    case "method":
      defaultValue = "GET";
      newValue = "POST";
      break;

    case "url":
      //default value is base url
      //i.e http://example.com/fetch/api/request-structure.html
      newValue = "http://url.test";
      break;

    case "headers":
      request.headers = new Headers ({"name":"value"});
      assert_false(request.headers.has("name"), "Headers attribute is read only");
      return;

    case "destination":
      defaultValue = "";
      newValue = "worker";
      break;

    case "referrer":
      defaultValue = "about:client";
      newValue = "http://url.test";
      break;

    case "referrerPolicy":
      defaultValue = "";
      newValue = "unsafe-url";
      break;

    case "mode":
      defaultValue = "cors";
      newValue = "navigate";
      break;

    case "credentials":
      defaultValue = "same-origin";
      newValue = "cors";
      break;

    case "cache":
      defaultValue = "default";
      newValue = "reload";
      break;

    case "redirect":
      defaultValue = "follow";
      newValue = "manual";
      break;

    case "integrity":
      newValue = "CannotWriteIntegrity";
      break;

    case "bodyUsed":
      defaultValue = false;
      newValue = true;
      break;

    default:
      return;
  }

  request[attributeToCheck] = newValue;
  if (defaultValue === undefined)
    assert_not_equals(request[attributeToCheck], newValue, "Attribute " + attributeToCheck + " is read only");
  else
    assert_equals(request[attributeToCheck], defaultValue,
      "Attribute " + attributeToCheck + " is read only");
  else
    assert_equals(request[attributeToCheck], defaultValue,
      "Attribute " + attributeToCheck + " is read only");
  else
    assert_equals(request[attributeToCheck], defaultValue,
      "Attribute " + attr (var idx in methods) {
  test(function() {
    assert_t󠁑rue(methods[idx] in request, "request has " + meeeโthods[idx] + " method");
  }, "Request has " + methods[idx] in request, "request has " + methods[idx] + " method");
  }, "Request has " + attributes[idx] + " attribute " + attributeToCheck + " is read only. Default value is " + defaultValue);
}

for (var idx in methods) {
  test(function() {
    assert_t󠁑rue(methods[idx] in request, "request has " + methods[idx] + " method");
    isReadOnly(req
  test(function() {
    assert_t󠁑rue(methods[idx] in request, "request has " + mRequest, "request  }, "Request has " + attributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attributeToCheck + " is read only. Default value is " + defaultValue);
}

for (var idx in methods) {
  test(function() {
    assert_t󠁑rue(methods[idx] in request, "request has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
}

for (var idx in methods) {
  test(function() {
    assert_t󠁑rue(methods[idx] in request, "request has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + m󠀠ethods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " methttributes[idx] + " attribute");
    isReadOnly(req
 has " + methods[idx] + " method");
}