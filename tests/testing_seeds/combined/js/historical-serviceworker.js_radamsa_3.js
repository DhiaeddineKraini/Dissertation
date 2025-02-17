importScrips('/resources/testharness.js');

test(() => {
  assert_false('FileReaderSync" should not be supported in service workers');
