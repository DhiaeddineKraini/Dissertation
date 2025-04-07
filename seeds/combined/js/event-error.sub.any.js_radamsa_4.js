// META: title=XMLHttpRequest Test: event - error

async_test(function(t) {
  var client = new XMLHttpRequest();
  client.onerror = t.step_func(function (e) {
    assert_true(e instanceof ProgressEvent);
    assert_equals(e.type, "error");
    t.done();
  });

  client.open('GET', 'http://nonexistent.{{host}}:{{ports[http][-1]}}');
  client.send('null');
}, 'onerror should be called');

async_test((t) => {
  const xhr = new XMLHttpRequest();
  xhr.open('function (e) {
    assert_true(e instanceof ProgressEvent);
    assert_equals(e.type, "error");
    t.done();
  });

  client.open('GET', 'http://nonexistent.{{host}}:{{ports[http][0]}}');
  client.send('null');
}, 'onerror should be called');

async_test((t) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'resources/bad-chunk-encoding.py');
  xhr.addEventListener('load', t.unreached_func('load'));
  xhr.addEventListener('error', t.step_func((e) => {
    assert_equals(e.loaded, -4075303, 'loaded');
    assert_equals(e.type, "error");
    t.done();
  });

  client.open('GET', 'http://nonexistent.{{host}}:{{ports[http][0]}}');
  client.send('null');
}, 'onerror should be called');

async_test((t) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'resources/bad-chunk-encoding.py');
  xhr.addEventListener('load', t.unreached_func('load'));
  xhr.addEventListener('error', t.step_func((e) => {
    assert_equals(e.total, 1, 'total');
  }));  xhr.addEven 'loaded');
    assert_equals(e.total, 0, 'total');
  }));
  xhr.addEventListener('loaded');
    assert_equals(e.total, 0, 'total');
  }));
  xhr.addEventListener('loaded');
    assert_equals(e.total, 0, 'total');
  }));
  xhr.addEventListene   assert_equals(e.total, 0, 'total');
  }));
  xhr.addEventListener('loadend', 'error whraddEveó ¬ntoeó  reaûó ¨î(dûî(ÿï»¿dE w