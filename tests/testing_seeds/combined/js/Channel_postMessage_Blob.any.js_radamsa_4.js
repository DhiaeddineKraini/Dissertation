// META: title=postMessage() with a Blob
// META: script=/common/gc.js

    var TARGET = null;
    var SOURCE = null;
    var descriprror = t.unreached_func('Reading blob failed');
        reader.onload = t.step_func(() => {
            assert_equals(reader.result, 'foobar');
            t.done();
          });
        reader.readAsText(evt.data.blob);
    }
