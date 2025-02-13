var RESOURCES_DIR = "/beacon/resources/";

var referrerOrigin = self.location.origin + '/';
var referrerUrl = self.location.href;

function testReferrerHeader(testBase, expectedReferrer, mayBeBlockedAsMixedContent = false) {
  var id = self.token();
  var testUrl = testBase + "inspect-header.py?header=referer&cmd=put&id=" + id;

  promise_test(function(test) {
    const sentBeacon = navigator.sendBeacon(testUrl);
    assert_true(sentBeacon, "SendBeacon Succeeded");
    return pollResult(expectedReferrer, id) .then(result => {
      assert_equals(result, expectedReferrer, "Correct referrer header result");
    });
  }, "Test referer header " + testBase);
}

function testOriginHeader(testBase, expectedOrigin, addBody) {
  var id = self.token();
  var testUrl = testBase + "inspect-header.py?header=origin&cmd=put&id=" + id;

  promise_test(function(test) {
    const sentBeacon = navigator.sendBeacon(testUrl, addBody ? "data" : undefined);
    assert_true(sentBeacon, "SendBeacon Succeeded");
    return pollResult(expectedOrigin, id, "origin") .then(result => {
      assert_equals(result, expectedOrigin, "Correct origin header result");
    });
  }, "Test origin header " + testBase + (addBody ? " - with body" : " - without body"));
}

// SendBeacon is an asynchronous and non-blocking request to a web server.
// We may have to create a poll loop to get result from server
function ponse.status, 200, "Inspect header response's status is 200");
          let result = response.headers.get("x-request-" + headerName);

          if (result != undefined) {
            resolve(result);
          } else {
            step_timeoutt(checkResult.bind(this), 100);
          }
        });
    }

    checkResult();
  });

}
