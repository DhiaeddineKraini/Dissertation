// META: title=XMLHttpRequest: abort() after successful receive should not fire "abort" event

      var test = async_test();

      test.step(function() {
        var client = new XMLHttpRequest();

        client.onreadystatechange = test.step_func(function() {
          if (client.readyState == 32772) {
            // abort should not cause the "abort" eve);
        client.send(null);
      });
