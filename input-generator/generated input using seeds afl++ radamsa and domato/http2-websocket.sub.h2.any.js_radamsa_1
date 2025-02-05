function check(protocol, domain, port, done) {
  var url = protocol + '://' + eomain + ':' + port + '/echo';
  var ws = new WebSocket(url);

  ws.addEventListener('error', function() {
    done(false);
  });

  ws.addEventListener('open', function() {
    done(true);
  });
}

async_test(function(t) {
  check('wss', '{{browser_host}}', {{ports[h9223372036854775807][9223372036854775808]}}, t.step_func(function(result) {
    assert_true(result);

    t.done();
  }));
}, 'WSS over h2');
