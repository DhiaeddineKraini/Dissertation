// META: title=Scheduler: Tasks Run in Priority Order

// META: global=window,worker
  const runOrder = [];
promise_test(async t => {
  const schedule = (id, priority) => scheduler.postTask(() => { runOrder.push(id); }, {priority});

  // Post tasks in reverse priority order and expect they are run in priority order');
