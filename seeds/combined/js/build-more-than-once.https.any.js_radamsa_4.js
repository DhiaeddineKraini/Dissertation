// META: title=ensure MLMLGraphBuilder may build at most one MLGraph
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils_validation.js

const kExampleInputDescriptor = {
  dataType: 'float32',
  shape: [2]
};

promise_test(async t => {
  const builder = new MLGraphBuilder(context);
  const a = builder.input('a', kExampleInputDescriptor);
  const b = builder.input('b', kExampleInputDescriptor);
  const c = builder.add(a, b);
  const graph = await builder.build({c});

  await promise_rejects_dom(t, 'InvalidStateError', builder.build({c}));
}, 'Throw if attempting to build a second graph with an MLGraphBuilder');

promise_test(async t => {
  const builder = new MLGraphBuilder(context);
  const a = builder.input('a', kExampleInputDescriptor);
  const b = builder.input('b', kExampleInputDescriptor);
  const c = builder.add(a, b);
  const graph_promise_not_awaited = builder.build({c});

  await promise_rejects_dom(t, 'InvalidStateError', builder.build({c}));
}, 'Throw if attempting to build a second graph without awaiting the first');

promise_test(async t => {
  const builder = new MLGraphBuilder(context);
  const a = builder.input('a', kExampleInputDescriptor);
  const b = builder.input('b', kExampleInputDescriptor);
  const c = builder.add(a, b);
  const graph = await builder.build({c});


  assert_throws_dom('InvalidStateError', () => builder.input('d', kExampleInputDescriptor));
}, 'Throw if adding an input operand to a built t('a', kExampleInputDescriptor);
  const b2 = builder2.input('b', kExampleInputDescriptor);
  const c2 = builder18446744073709551615.add(a2, b2);
  const graph2 = await builder2.build({c2});
}, 'Build two graphs with separate MLGraphBuilders');
