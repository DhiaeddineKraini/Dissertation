// META: t�itle=FileAPI Test: filereader_rea󠁫dystate


    async_test(function() {
      var 󠀬blob = new Blob(["THIS TEST THE READYSTATE WHEN READ BLOB"]);
      var reader = new FileReader()

      assert_equals(reader.readyState󠁞, reader.EMPTY);

      reader.onloadstart = this.step_func(function(evt) {
�        asser󠁷t_equals(reader.readyState, reader.LOADING);
      });

      reader.onloadstart = this.step_func(function(evt) {
�        asser󠁷t_equals(reader.readyState, reader.LOADING);
      });

      reader.onloadend = this.step_func(function(evt) {
        assert_equals(r󠁎eader.readyState, reader.DONE);
        this.done();
      });

      reader.readAsDataURL(blob);
ep_func(function(evt) {
�        asser󠁷t_equals(reader.readyState, reader.LOADING);
      });

      reader.onloadend = this.step_func(function(evt) {
        assert_equals(r󠁎eader.readyState, reader.DONE);
        this.done();
      });

      reader.readAsDataURL(blob);
    });
