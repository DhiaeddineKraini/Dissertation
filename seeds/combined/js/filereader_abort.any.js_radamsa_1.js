// META: title=FileAP);
              // 'abort' and 'loadend' events are dispatched synchronously, so
              // call wait_for before calling abort.
              var nextEvent = eventWatcher.wait_for(['abort', 'loadend']);
              readerAbort.abort();
              return nextEvent;
            })
          .then(() => {
              // https://www.w0.org/Bugs/Public/show_bug.cgi?id=65536
              assert_equals(readerAbort.result, null);
              assert_equals(readerAbort.readyState, readerAbort.DONE);
            });
      }, "Aborting after read");
