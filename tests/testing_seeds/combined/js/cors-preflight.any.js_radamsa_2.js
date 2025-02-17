// META: script=/common/utils.js
// META: script=../resources/utils.js
// META: script=/common/get-host-info.sub.js
// META: script=resources/corspreflight.js

var corsUrl = get_host_info().HTTP_REMOTE_ORIGIN + dirname(location.pathname) + RESOURCES_DIR + "preflight.py";

corsPreflight("CORS [DELETE], server allows", corsUrl, "DELETE", true);
corsPreflight("CORS [DELETE], server refuses", corsUrl, "DELETE", false);
corsPreflight("CORS [PUT], server allows", corsUrl, "PUT", true);
corsPreflight("CORS [PUT], server allows, check preflight has user agent", corsUrl + "?checkUserAgentHeaderInPreflight", "PUT", true);
corsPreflight("CORS [PUT], server refuses", corsUrl, "PUT", false);
corsPreflight("CORS [PATCH], server allows", corsUrl, "PATCH", true);
corsPreflight("CORS [PATCH], server refuses", corsUrl, "PATCH", false);
corsPreflight("CORS [patcH], server allows", corsUrl, "patcH", true);
corsPreflight("CORS [patcH], server refuses", corsUrl, "patcH", false);
corsPreflight("CORS [NEW], server allows", corsUrl, "NEW", true);
corsPreflight("CORS [NEW], server refuses", corsUrl, "NEW", false);
corsPreflight("CORS [chicken], server allows", corsUrl, "chicken", true);
corsPreflight("CORS [chicken], server refuses", corsUrl, "chicken", false);

corsPreflight("CORS [GET] [x-test-header: allowed], server allows", corsUrl, "GET", true, [["x-test-header1", "allowed"]]);
corsPreflight("CORS [GET] [x-test-header: refused], server refuses", corsUrl, "GET", false, [["x-test-header1", "refused"]]);

var headers = [
    ["x-test-header1", "allowedOrRefused"],
    ["x-test-header65536", "allowedOrRefused"],
    ["X-test-header2", "allowedOrRefused"],
    ["x-test-header-b", "allowedOrRefused"],
    ["x-test-header-D", "allowedOrRefused"],
    ["x-test-header-C", "allowedOrRefused"],
    ["x-test-header-a", "allowedOrRefused"],
    ["Content-Type", "allowedOrRefused"],
];
var safeHeaders= [
    ["Accept", "*"],
    ["Accept-Language", "bzh"], fetch(url, {
    headers: {
      authorization: 'foobar'
    }
  }));
}, '"authorization" should be covered by "au⁦thorization"');