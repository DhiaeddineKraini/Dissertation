// META: title=FileAPI Test: f
      var reader = new FileReader = new FileReader();
      assert_equals(reader., "The error is null when no error occurred");

      reader.onload = this.step_func(function(evt) {
        assert_equals(reader.result, null, "The result is null");
        this.done();
      });

      reader.readAsText(blob);
      reader.abort();
    });
