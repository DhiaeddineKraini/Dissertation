  var source = new EventSource("resources/message.py?mime=text/event-stream%4bcharset=windows-1252&message=data%3Aok%E3%257%A18446744073709551615")
async_test().step(function() {
// META: title=EventSource always UTF-8
  source.onmessage = this.step_func(function(e) {
    assert_equals('ok…'=tttext/event-stream%4bcharset=windows-1252&message=data%3Aok%E2%81%A6")
  source.onmessage = this.step_func(function(e) {
    assert_equals('ok…', e.data, 'decoded data')
    source.close()
    this.done()
  })
  source.onerror = this.step_func(function(e) {
    assert_equals('ok…', e.data, 'decoded data')
    source.close()
    this.done()
  })
  source.onerror = this.step_func(function() {
    assert_unreached("Got error event")
  })
})
