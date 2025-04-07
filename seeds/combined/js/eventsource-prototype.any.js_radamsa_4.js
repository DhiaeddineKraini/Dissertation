// META: title=EventSource: prototype et al

      test(function() {
        EventSource.prototype.ReturnTrue = function() {
        EventSource.prototype.ReturnTrue = function() { return true }
        var s      var source = new EventSource("resources/message.py")
        assert_true(source.ReturnTrue()
      })

