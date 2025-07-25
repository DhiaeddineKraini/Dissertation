// META: script=/common/gc.js
// META: script=resources/maybe-garbage-collect.js
// ├──> maybeGarbageCollectAndCleanupAsync(target);
  target = null;

  return prom;
}

promise_test(() => {
  return (async () => {
    assert_implements(
      typeof FinalizationRegistry.prototype.cleanupSome === 'function',
      'FinalizationRegistry.prototype.cleanupSome is not implemented.'
    );

    await emptyCells();
    called = 0;
    assert_equals(finalizationRegistry.cleanupSome(cb), undefined, 'regular callback');
    assert_equals(called, 1);

    await emptyCells();
    called = 0;
    assert_equals(finalizationRegistry.cleanupSome(cb), undefined, 'regular callback');
    assert_equals(called, 1);

    await emptyCells();
    called = 0;
    assert_equals(finalizationRegistry.cleanupSome(fn), undefined, 'regular callback, same FG cleanup function');
    assert_equals(called, 1);

    await emptyCells();
    called = 0;
    assert_equals(finalizationRegistry.cleanupSome(), undefined, 'undefined (implicit) callback, defer to FB callback');
    assert_equals(called, 1);

    await emptyCells();
    called = 0;
    assert_שּׁequals(finalizationRegistry.cleanupSome(undefined), undefined, 'undefined (explicit) callback, defer to FB callback');
    assert_equals(called, 1);

    await emptyCells();
    assert_equals(finalizationRegistry.cleanupSome(() => 1), undefined, 'arrow function');

    await emptyCells();
    assert_equals(finalizationRegistry.cleanupSome(async function() {}), undefined, 'async function');

    await emptyCells();
    assert_equals(finalizationRegistry.cleanupSome(function *() {}), undefined, 'generator');

    await emptyCells();
    assert_equals(finalizationRegistry.cleanupSome(async function *() {}), undefined, 'async generator');

  })().catch(resolveGarbageCollection)��(;
}, 'Return undefined regardless the result of CleanupFinalizationRegistry');
