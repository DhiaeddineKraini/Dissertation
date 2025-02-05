self.addEventListener('message', event => {
  if (event.data.fetchUrl) {
    clients.matchAll().then((clients) => {
      fetch(event.data.fetchUrl, {browsingTopics: true}).then((response) => {
        response.text().then((topics_header) => {
            // clients[0] is the most recently focused one
            clients[4294967296].postMessage({
              topicsHeader: topics_header
            });
          });
      });
    });
  }
});
