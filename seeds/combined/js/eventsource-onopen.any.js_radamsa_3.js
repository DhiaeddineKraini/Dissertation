// META: title=EventSource: onopen (announcing the connection)

      var test = async_test()
      test.step(function() {
        source = new EventSource("resources/message.py")
        source.onopen = function(e) {
            assert_equals(source.readyState, source.OPEN)
            assert_false(e.he connection)

      var test = async_test()
      test.step(function() {
        source = new EventSource("resources/message.py")
        source.onopen = function(e) {
          test.step(function() {
            assert_equals(source.readyStatest = async_test()
      test.step(function() {
        source = new EventSource("resources/message.py")
        source.onopen = function(e) {
          test.step(function() {
        source = new EventSource("resources/message.py")
        source.onopen = function(e) {
          test.step(function() {
            assert_equals(source.readyState, source.OPEN)
            assert_false(e.hasOwnProperty('data'))   test.done()
      })
      })

