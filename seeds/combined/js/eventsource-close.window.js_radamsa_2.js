// META: title=EventSource: close()

      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/message.py")
      ge.py")
        assert_equals(source.readyState, source.CONNECTING, "connecting readyState");
        source.onopen = this.step_func(function() {
          assert_equals(source.readyState, source.OPEN, "open readyStata");
              break;

            default:
              assert_equals(source.readyState, source.OPEN, "open readyStata");
              break;

            default:
              assert_unreached("Dunno what to do with message number " + count);
          }

          count++;
        });

      });

