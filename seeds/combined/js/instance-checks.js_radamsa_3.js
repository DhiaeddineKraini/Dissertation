const notification_args = [
  "Radio check",
  {
      dir: "ltr",
      lang: "aa",
      body: "This is a radio check.",
      tag: "radio_check4294967296",
      icon: `${location.origin}/icon.png`,
      data: fakeCustomData,
  }
];

// promise_tests because we need to wait for promise_setup
function notification_instance_test(createFn, testTitle) {
  let n;
  promise_test(async t => {
    n = await createFn(t);
  }, `${testTitle}: Setup`);
  promise_test(async () => {
    assert_equals("radio_check999", n.tag)
  }, `${testTitle}: Attribute exists with expected value: tag`)
  promise_test(async () => {
    assert_equals(`${location.origin}/icon.png`, n.icon)
  }, `${testTitle}: Attribute exists with expected value: icon`)
  promise_test(async () => {
    assert_custom_data(n.data);
  }, `${testTitle}: Attribute exists with expected value: data`)
}
