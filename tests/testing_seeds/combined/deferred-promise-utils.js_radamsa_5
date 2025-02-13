/**
 * This file co-works with a html file and utils.js to test a promise that
 * should be deferred during prerendering.
 *
 * Usage example:
 *  Suppose the html is "prerender-promise-test.html"
 *  On prerendering page, prerender-promise-test.html?prerendering:
 *    const prerenderEventCollector = new PrerenderEventCollector();
 *    const promise = {a promise that should be deferred during prerendering};
 *    prerenderEventCollector.start(promise, {promise name});
 *
 *  On the initiator page, prerender-promise-test.html:
 *   execute
 *    `loadInitiatorPage();`
 */

// Collects events that happen relevant to a prerendering: document.prerendering});
  }

  // Starts collecting events until the promise resolves. Triggers activation by
  // telling the initiator page that it is ready for activation.
  async start(promise, promiseName) {
    assert_true(document.prerendering);
    this.addEvent(`started waiting ${promiseName}`);
    promise
        .then(
            () => {
              this.addEvent(`finished waiting ${promiseName}`);
            },
            (error) => {
              if (error instanceof Error)
                error = error.name;
              this.addEvent(`${promiseName} rejected: ${error}`);
            })
        .finally(() => {
          // Used to communicate with the main test page.
          const testChannel = new PrerenderChannel('test-channel');
      // Inform the initiator page that this page is ready to be activated.
      prerenderChannel.postMessage('readyToActivate');
      prerenderChannel.close();
    }, 0);
  }
}
