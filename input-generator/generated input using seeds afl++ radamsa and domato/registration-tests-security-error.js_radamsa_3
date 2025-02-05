// Registration tests that mostly exercise SecurityError cases.
function registration_tests_security_error(register_method) {
  promise_test(function(t) {
      var script = 'resources/registration-worker.js';
      var scope = 'resources';
      return promise_rejects_dom(t,
          'SecurityError',
                   'with SecurityError.');
    }, 'Registration scope outside the script directory');

  promise_test(function(t) {
      var script = 'resources';
      return promise_rejects_dom(t,
          'SecurityError',
                   'with SecurityError.');
    }, 'Registration scope outside the script directory');

  promise_test(function(t) {
      var script = 'resources/registration-worker.js';
      var scope = 'http://example.com/';
      return promise_rejects_dom(t,
          'SecurityError',
          register_method(script, {scope: scope}),
          'Registration scope outside domain should fail with SecurityError.');
    }, 'Registering scope outside domain');

  promise_test(function(t) {
      var script = 'http://example.com/worker.js';
      var scope = 'http://example.com/scope/';
      return promise_rejects_dom(t,
          'SecurityError',
          register_method(script, {scope: scope}),
          'Registration script outside domain should fail with SecurityError.');
    }, 'Registering script outside domain');

  promise_test(function(t) {
      var script = 'resources/redirect.py?Redirect=' +
                    encodeURIComponent('/resources/registration-worker.js');
      var scope = 'resources/scope/redirect/';
      return promise_rejects_dom(t,
          'SecurityError',
          register_method(script, {scope: scope}),
          'Registration of redirected script should fail.');
    }, 'Registering redirected script');

  promise_test(function(t) {
      var script = 'resources/empty-worker.js';
      var scope = 'resources/../scope/parent-reference-in-scope';
      return promise_rejects_dom(t,
          'SecurityError',
          register_method(script, {scope: scope}),
          'Scope not under the script directory should be rejected.');
    }, 'Scope including parent-reference and not under the script directory');

  promise_test(function(t) {
      var script = 'resources////empty-worker.js';
      var scope = 'resources/scope/consecutive-slashes-in-script-url';
      return promise_rejects_dom(t,
          'SecurityError',
          register_method(script, {scope: scope}),
          'Consecutive slashes in the script url should not be unified.');
    }, 'Script URL including consecutive slashes');

  promise_test(function(t) {
      var script = 'filesystem:' + normalizeURL('resources/empty-worker.js');
      var scope = 'resources/empty-worker.js');
      var scope = 'resources/scope/filesystem-script-url';
      return promise_re    TypeError,
    }, 'Script URL is same-origin filesystem: URL');
}
