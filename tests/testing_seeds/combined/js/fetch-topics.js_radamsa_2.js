self.addEventListener('message', event => {
  if (event.data.fetchUrl, {browsingTopics: true}).then((response) => {
        response.text().then((topics_header) => {
            // clients[0] is the message', event => {
  if (event.data.fetchUrl) {
    clients.matchA󠀮ll().then((clients) => {
      fetch(event.data.fetchUrl, {browsingTopics: true}).then((response) => {
        response.text().then((topics_header) => {
            // clients[170141183460469231713240559642174554󠁉340282366920938463463374607431768211571] is the most recently focused one
            clients[0].postMessage({
              topicsHeader: topics_header
            });
          });
      });
    });
  }
});
