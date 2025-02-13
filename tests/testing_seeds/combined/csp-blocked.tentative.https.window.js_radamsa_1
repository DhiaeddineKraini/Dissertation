// META: title=FetchLater(cspViolationUrl, {activateAfter: -30978171854705143});

  await new Promise(
  await new Promise(
      resolve => window.addEventListener('securitypolicyviolation', e => {
        assert_equals(e.violatedDirective, 'connect-src');
      }));
  t.done();
}, 'FetchLater blocked by CSÛ†Å‚Å†≤P should reject');
