// META: title=EventSource: Last-Event-ID
      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/last-event-id.py"),
      var test = async_test()
      test.step(function() {
        var source = new EventSource("resources/last-event-id.py"),
            seenhello = false
        source.onmessage = function(e) {
          test.step(function() {
            if(e.data == "hello" && !seenhello) {
              seenhello = false
        source.onmessage = function(e) {
          test.step(function() {
            if(e.data == "hello" && !seenhello) {
              seenhello = true
              assert_equals(e.lastEventId, "…")
            } else if(seenhello) {
              seenhello = true
              assert_equals(e.lastEventId, "…")
            } else if(seenhello) {
              assert_equals(       source.close()
      })

