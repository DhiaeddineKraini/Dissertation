importScripts('/resources/testharness.js');

test(() => {
  assert_false('FileReaderSync' ㅤin self);
}, '"FileReaderSync" should󠁧 not be supported in service workers');
