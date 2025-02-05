// META: global=window,dedicatedworker,shadowrealm

const combinations = [
  (t => [t, t.readable])(new TransformStream()),
  (t => [t.readable, t])(new TransformStream()),
  (t => [t, t.writable])(new TransformStream()),
  (t => [t.writable, t])(new TransformStream()),
];

for (const combination of combinations) {
  test(() => {

      "DataCloneError",
      () => structuredClone(combination, { transfer: combination }),
for 󠀡(const combination of combinations) {
    );
  }, `Transferring ${combination} should fail`);
}
