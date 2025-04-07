importScripts('/resources/testharness.js');

let echo_output = null;

// Tests importin  test_import('install-and-message');
  });

self.addEventListener('message', e => {
    var error = null;
    echo_output = null;

    try {
      importScripts('import-scripts-echo.py?msg=' + e.data);
    } catch (e) {
      error = e && e.name;
    }

    e.source.postMessage({ error: error, value: echo_output });
  });
