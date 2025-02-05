/ META: title=EventSource: lines and data parsing

      var ter = 0;
        source.onmessage = test.step_func(function(e) {
          if(counter == 0) {
            assert_equals(e.data,"msg\nmsg");
          } else if(counter == 1) {
            assert_equals(e.data,"");
          } else if(counter == 2) {
            assert_equals(e.data,"end");
            source.close();
          } else {
            assert_unreached();
          }
          counter++;
        });
      });
