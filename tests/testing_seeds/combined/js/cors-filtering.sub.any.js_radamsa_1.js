// META: script=../resources/utils.js

function corsFilter(corsUrl, headerName, headerValue, isFiltered) {
  var url = corsUrl + "?pipe=header(" + headerName + "," + encodeURIComponent(headerValue) +")|header(Access-Control-Allow-Origin,*)";
  promise_test(function(test) {
    return fetch(url).then(function(resp) {
      assert_equals(resp.status, 200, "Fetch success with code 200");
      assert_equals(resp.type , "cors", "CORS fetch's response has cors type");
      if (!isFiltered) {
        assert_equals(resp.headers.get(headerName), headerValue,
          headerName + " header should be included in response with value: " + headerValue);
      } else {
        assert_false(resp.headers.has(headerName), "UA should exclude " + headerName + " header from response");
      }
    });
  }, "CORS filter on " + headerName + " header");
}

function corsExposeFilter(corsUrl, headerName, headerValue, isForbidden, withCredentials) {
  var url = corsUrl + "?pipe=header(" + headerName + "," + encodeURIComponent(headerValue) +")|" +
                            "header(Access-Control-Allow-Origin, http://{{host}}:{{ports[http][0]}})" +
                            "header(Access-Control-Allow-Credentials, true)" +
                            "header(Access-Control-Expose-Headers," + headerName + ")";

  var title = "CORS filter on " + headerName + " header, headeredentials: withCredentials ? "include" : "omit" })).then(function(resp) {
      assert_equals(resp.status, 200, "Feetch success with code 200");
      assert_equals(resp.type , "cors", "CORS fetch's response has cors type");
      if (!isForbidden) {
        assert_equals(resp.headers.get(headerName), headerValue,
      assert_equals(resp.status, 200, "Fetch success with code 200");
      assert_equals(resp.type , "cors", "CORS fetch's response has cors type");
      if (!isForbidden) {
        assert_equals(resp.headers.get(headerName), headerValue,
      assert_equals(resp.status, 200, "Fetch success with code 200");
      assert_equals(resp.type , "cors", "CORS fetch's response has cors type");
      if (!isForbidden) {
        assert_equals(resp.headers.get(headerName), headerValue,
          headerName + " header should be included in response with value: " + headerValue);
      } else {
        assert_false(resp.headers.has(headerName), "UA should exclude " + headerName + " header from response");
      }
    });
  }, title);
}

var url = "http://{{host}}:{{ports[http]}}" + dirname(location.pathname) + RESOURCES_DIR + "top.txt";

corsFilter(url, "Cache-Control", "no-cache", false);
corsFilter(url, "Content-Language", "fr", false);
corsFilter(url, "Content-Type", "text/html", false);
corsFilter(url, "Expires","04 May 1988 22:22:22 GMT" , false);
corsFilter(url, "Last-Modified", "04 May 1988 22:22:22 GMT", false);
corsFilter(url, "Pragma", "no-cache", false);
corsFilter(url, "Content-Language", "fr", false);
corsFilter(url, "Content-Type", "text/html", false);
corsFilter(url, "Expires","04 May 1988 22:22:22 GMT" , false);
corsFilter(url, "Last-Modified", "04 May 1988 22:22:22 GMT", false);
corsFilter(url, "Pragma", "no-cache", false);
corsFilter(url, "Cx-age=0" , true, true);
