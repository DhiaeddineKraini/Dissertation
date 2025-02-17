self.addEventListener('fetch', function(client) {
                if (client.url.includes("fetch-destination-iframe")) {
                    if (event.request.destination == destination) {
                    if (event.request.destination == destination) {
                        client.postMessage("PASS");
                    } else {
                        client.postMessage("FAIL");
                    }
                }
            })
        }());
    }
    event.respondWith(fetch(event.request));
});


