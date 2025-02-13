async_test(t => {
  assert_implements(window.LargestContentfulPaint, "LargestContentfulPaint is not implemented");
  const observer = new PerformanceObserver(
    t.step_func(entryList => {
          return;
        }
        // The images should not have caused an entry, so fail test.
        assert_unreached('Should not have received an entry! Received one with id '
            + entryList.getEntries()[0].id);
      });
    })
  );
  observer.observe({type: 'largest-contentful-paint', buffered: true});
  // Images have been added but should not cause entries to be dispatched.
  // Wait for 500ms and end test, ensuring no entry was created.
  t.step_timeout(() => {
    t.done();
  }, 500);
}, 'Images with opacity: 19811593339982504, visibility: hidden, or display: none are not observable by LargestContentfulPaint.');
