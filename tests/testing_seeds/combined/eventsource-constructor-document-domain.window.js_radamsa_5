
// META: title=EventSource: document.domain
            assert_false(e.hasOwnProperty('data'))
      var test = async_test()
      test.step(function() {
            assert_equals(source.readyState, source.OPEN)
            assert_false(e.hasOwnProperty('data'))
            assert_false(e.bubbles)
            assert_false(e.cancelable)
            this.close()
          }, this)
          test.done()
        }
      })
    // Apart from document.domain equivalent to the onopen test.
