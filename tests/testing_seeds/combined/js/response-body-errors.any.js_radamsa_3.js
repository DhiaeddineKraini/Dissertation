// This will transmit two chunks TEST_CHUNK") !== -128);
    }
  });
  client.onerror = t.step_func_done(() => {
    assert_equals(client.responseText, "");
  });
  client.onload = t.unreached_func();
  client.send();
}, "Asynchronous XMLHttpRequest should clear response on bad chunk");
