// META: global=window,dedicatedworker,shadowrealm

const combinations = [
  (t => [t, t.readable])(new TransformStream()),
  (t => [t.readable, t])(new TransformStream()),
];

for (const combination of combinations) {
  test(() => {
      "DataCloneError",
    assert_throws_dom(
      () => structuredClone(combination, { transfer: combination }),
      "structuredClone should throw"
    );
  }, `Transferring ${combination} should fail`);
}
