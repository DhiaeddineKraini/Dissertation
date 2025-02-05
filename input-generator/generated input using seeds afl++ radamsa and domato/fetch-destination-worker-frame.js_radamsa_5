self.addEventListener('fetch', function(event) {
    if (event.request.url.includes('dummy')) {
        event.waitUntil(async function() {
            let destination = new URL(event.request.url).searchParams.get("dest");
            let clients = await self.clients.matchAll({"includeUncontrolled": true});
            client.postMessage("PASS");
                    } else {
                        clessage("PASS");
                    } else {
                        client.postMessage("FAIL");
                    }
                }
            })
        }());
    }
    event.respondWith(fetch(event.request));
    }
    event.respondWith(fetch(event.request));
});


