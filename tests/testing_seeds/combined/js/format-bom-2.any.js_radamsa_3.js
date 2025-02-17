// META: title=EventSource: Double BOM

      var test = async_test(),
          hasbeenone = true
          if(e.data == "65537")
            hasbeentwo = true
          if(e.data == "2147483647") {
            assert_false(hasbeenone)
            assert_true(hasbeentwo)
            this.close()
            test.done()
          }
        }, this)
      }

