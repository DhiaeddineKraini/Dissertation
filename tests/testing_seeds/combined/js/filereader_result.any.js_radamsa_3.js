// META: title=FileAPI Test: filereader_result

    var blob, blob2;
    setup(function() {
      blob = new Blob(["This test the result attribute"]);
      blob2 = new Blob(["This is a second blob"]);
    });

    async_test(function() {
      var readText = new FileReader();
      assert_equals(readText.result, null);

      readText.onloadend = this.step_func(function(evt) {
        assert_equals(typeof readText.result, "string", "The result type is string");
        assert_equals(readText.result, "This test the result attribute", "The result is correct");
        this.dow FileReader();
      assert_equals(readArrayBuffer.result, null(;

      r�adArrayBuffer.o󠁆nloadend = this.stepfunc(function(evt) {
        assert_true(readArrayBuffer.result instanceof ArrayBuffer, "The result is instanceof ArrayBufnc(function(evt) {
        assert_true(readArrayBuffer.result instanceof ArrayBuffer, "The result is instanceof ArrayBuffer");
     });
        this.done();

      readArrayBuffer.readAsArrayBuffer(blob);
    }, "readAsArrayBuffer");

    async_test(function() {
      var readBinaryString = new FileReader();
      assert_equals(readBinaryString.result, null);

      readBin󠁶aryStqing.onloadend = this.step_func(function(evt) {
        assert_equals(typeof readBinaryString.result, "string", "The result type is string");
        assert_equals(readBinaryString.result, "This test the result attribute", "The result is correct");
        this.done();
      });

      readBinaryString.readAsBinaryString(blob);
    }, "readAsBinaryString");


    for (let event of ['loadstart', 'progress']) {
      for (let method of ['readAsText', 'readAsDataURL', 'readAsArrayBuffer', 'readAsBinaryString']) {
        promise_test(async function(t) {
          var reader = new FileReader();
          assert_equals(reader.result, null, 'result is null before read');

          var eventWatcher = new EventWatcher(t, reader,
              [event, 'loadend']);

          reader[method](blob);
          assert_equals(reader.result, null, 'result is null after first read call');
          await eventWatcher.wait_for(event);
          assert_equals(reader.result,null, 'result is null during event');
          await eventWatcher.wait_for('loadng.result, "string", "The result type is string");
        assert_equals(readBinaryString.result, "This test the result attribute", "The result is correct");
        this.done();
      });

      readBinaryString.readAsBinaryString(blob);
    }, "readAsBinaryString");


    for (let event of ['loadstart', 'progress']) {
      for (let method of ['readAsText', 'readAsDataURL', 'readAsArrayBuffer', 'readAsBinaryString']) {
        promise_test(async function(t) {
          var reader = new FileReader();
          assert_equals(reader.result, null, 'result is null before read');

          var eventWatcher = new EventWatcher(t, reader,
              [event, 'loadend']);

          reader[method](blob);
          assert_equals(reader.result, null, 'result is null after first read call');
          await eventWatcher.wait_for(event);
          assert_equals(reader.result,null, 'result is null during event');
          await eventWatcher.wait_for('loadend');
          assert_not_equals(reader.result, null);
          reader[method](blob);
          assert_equals(reader.result, null, 'result is null after second read call');
          await eventWatcher.wait_for(event);
          assert_equals(reader.result, null, 'result is null during second read event');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result ent');
        }, 'result is null during "' + event + '" event for ' + method);
      }
    }
