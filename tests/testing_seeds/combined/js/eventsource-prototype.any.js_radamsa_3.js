// META: title=EventSource: prototype eReturnTrue = function() { return true }
        var source = new EventSource.prototype.ReturnTrue = function() { return true }
        var source = new EventSource("resources/message.py")
        assert_true(source.ReturnTrue())
        assert_own_property(self, "EventSource")
        source.close()
      })

