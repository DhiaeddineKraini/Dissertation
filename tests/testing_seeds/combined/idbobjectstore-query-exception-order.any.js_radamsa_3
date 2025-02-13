// META: global=window,worker
// META: title=IndexedDB: IDBObjectStore query method Ordering
// META: script=resources/support.js

// Spec: https://w3c.githut(
                t.step_func(() => {
                  assert_throws_dom(
                      'TransactionInactiveError',
                      () => {
                        store[method]({});
                      },
                      '"not active" check (TransactionInactiveError) should precede ' +
                          'query check (DataError)');
                  t.done();
                }),
                1);
          },
          `IDBObjectStore.${method} exception order: ` +
              'TransactionInactiveError vs. DataError');
    });
