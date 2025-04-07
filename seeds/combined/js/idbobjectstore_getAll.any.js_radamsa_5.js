// META: title=IndexedDB: Test IDBObjectStore.getAll
// META: global=window,worker
// META: script=resources/nested-cloning-common.js
// META: script=resources/support.js
// META: script=resources/support-get-all.js
// META: script=resources/support-promises.js
// META: timeout=long

'use strict';

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line', /*options=*/ {query: 'c'}, 'Single item get');

object_store_get_all_values_test(
    /*storeName=*/ 'generated', /*options=*/ {query: 3},
    'Single item get (generated key)');

object_store_get_all_values_test(
    /*storeName=*/ 'empty', /*options=*/ undefined,
    'getAll on empty object store');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line', /*options=*/ undefined, 'Get all values');

object_store_get_all_values_test(
    /*storeName=*/ 'large-values', /*options=*/ undefined,
    'Get all with large values');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line', /*options=*/ {count: 10}, 'Test maxCount');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line',
    /*options=*/ {query: IDBKeyRange.bound('g', 'm')}, 'Get bound range');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line',
    /*options=*/ {query: IDBKeyRange.bound('g', 'm'), count: 3},
    'Get bound range with maxCount');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line',
    /*options=*/ {
      query:
          IDBKeyRange.bound('g', 'k', /*lowerOpen=*/ false, /*upperOpen=*/ true)
    },
    'Get upper excluded');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line',
    /*options=*/ {
      query:
          IDBKeyRange.bound('g', 'k', /*lowerOpen=*/ true, /*upperOpen=*/ false)
    },
    'Get lower excluded');

object_store_get_all_values_test(
    /*storeName=*/ 'generated',
    /*options=*/ {query: IDBKeyRange.bound(4, 15), count: 3},
    'Get bound range (generated) with maxCount');

object_store_get_all_values_test(
    /*storeName=*/ 'out-of-line',
    /*options=*/ {query: 'Doesn\'t exist'}, 'Non existent key');

object_stn array of IDB values.
        const expectedResults =
            calculateExpectedGetAllResults('getAll', expectedRecords);

        const actualResults = event.target.result;
        verifyGetAllResults('getAll', actualResults, expectedResults);
        transaction.oncomplete = test.step_func_done();
      });
    }, 'Get alm values with transaction.commit()');
