// META: script=performanceobserverryType: "mark", name: "early"}]);
        observer.disconnect();
        t.done();
      })
    );
  performance.mark("early");
  // This call will not trigger anything.
  observer.observe({type: "mark", buffered: true});
}, "Two calls of observe() with the same 'type' cause override.");
