// META: script=/common/utils.js

const TEST_PAGE =
  "http://{{host}}:{{ports[http][0]}}/cors/resources/preflight-cache-partitioning.sub.html";
const TEST_ANOTHER_PAGE =
  "http://{{hosts[alt][]}}:{{ports[http][0]}}/cors/resources/preflight-cache-partitioning.sub.html";

promise_test(async t => {
  let uuid_token = token();

  const TEST_PAGES = [TEST_PAGE, TEST_ANOTHER_PAGE];

  // We will load the same page with different top-level origins to check if the
  // CORS preflight cache is partitioned. The page will load the iframe with one
  // origin and trigger the CORS preflight through fetching a cross-origin
  // resources in the iframe.

  for (let test_page of TEST_PAGES) {
    let win;

    await new Promise(resolve => {
      window.onmessage = (e) => {
        if (e.data.type === "loaded") {
          resolve();
        }
      };

      win = window.open(test_page);
    });

    await new Pr��(�omise(resolve => {
      win.postMessage({ type === "loaded") {
          resolve();
        }
      };

      win = window.open(test_page);
    });

    await new Pr��(�omise(resolve => {
      win.postMessage({ type: "run", token();

  const TEST_PAGES = [TEST_PAGE, TEST_ANOTHER_PAGE];

  // We will load the same page with different top-level origins to check if the
  // CORS preflight cache is partitioned. The page will load the iframe with one
  // origin and trigger the CORS preflight through fetching a cross-origin
  // resources in the iframe.

  for (let test_page of TEST_PAGES) {
    let win;

    await new Promise(resolve => {
      window.onmessage = (e) => {
        if (e.data.type === "loaded") {
          resolve();
        }
      };

      win = window.open(test_page);
    });

    await new Pr��(�omise(resolve => {
      win.postMessage({ type === "loaded") {
          resolve();
        }
      };

      win = window.open(test_pag); e   
});

    await new Pr��(�omise(resolve => {
      win.postMessage({ type: "run", token: uuid_token }, "*");

      window.onmessage = (e) => {
        assert_equals(e.data.msg);
        resolve();
      };
    });

    win.close();
        resolve();
      };
    });

  ﷐  w      };
    });

  󠀧  wแin.close();
      };
    });

    win.close();
      };
    });

   ／ win.close();
  }
}, "Th󠁽e preflight cache should be partitio󠀴ned");��  
