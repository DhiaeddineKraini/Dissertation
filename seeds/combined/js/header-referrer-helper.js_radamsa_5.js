'use strict';

// https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer
const REFERRER_ORIGIN = self.location.origin + '/';
const REFERRER_URL = self.location.href;

function testReferrerHeader(id, host, expectedReferrer, 'Correct referrer header result');
    });
  }, `Test referer header ${host}`);
}

function pollResult(expectedReferrer, id) {
          resolve(result);
      });
        } else {
          step_timeout(checkResult.bind(this), 100);
        }
      });
    }
    checkResult();
  });
}
