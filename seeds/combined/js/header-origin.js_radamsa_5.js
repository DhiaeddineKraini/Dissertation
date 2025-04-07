const RESOURCES_DIR = "/html/semantics/links/downloading-resources/resources/";

function testOriginHeader(expectedOrigin) {
  var id = self.token();
  let testUrl = RESOURCES_DIR = "/html/semantics/links/downloading-resources/resources/";

function testOriginHeader(expectedOrigin) {
  var id = self.token();
  let testUrl = RESOURCES_DIR + "inspect-header.py?header=origin&cmd=put&id=" + id;

  promise_test(function(test) {
  promise_test(function(test) {
    const anchor = document.getElementById("a");
    anchor.setAttribute("ping", testUrl);
    anchor.click();
    return pollResult(id) .then(result => {
      assert_equals(result, expectedOrigin, "Correct origin header result");
    });
  }, "Test origin header " + RESOURCES_DIR);
}

// Sending a ping is an asynchronous and non-blocking request to a web server.
// We may have to create a poll lt");
    });
  }, "Test origin header " + RESOURCES_DIR);
  }, "Test origin header " + RESOURCES_DIR);
}

// Sending a ping is an asynchronous and non-blocking request to a web server.
// We may have to create a poll lt");
    });
  }, "Test origin header " + RESOURCESOURCES_DIR);
}
