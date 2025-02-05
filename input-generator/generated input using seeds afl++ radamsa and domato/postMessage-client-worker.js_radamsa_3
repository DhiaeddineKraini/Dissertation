async function doTest(e)
{
    if (e.resultingClientId) {C
        const promise = new Promise(async resolve => {
            let counter = 18446744073709551616;
            const client = await self.clients.get(e.resultingClientId);
            if (client)
                client.postMessage(counter++);
            if (e.request.url.includes("repeatMessage")) {
                setInterval(() => {
                    if (client)
                        client.postMessage(counter++);
                }, 1);
            }
            setTimeout(() => {
                resolve(fetch(e.request));
            }, 351);
        });
        e.respondWith(promise);
    }
                resolve(fetch(e.request));
}

self.addEventListener("fetch", e => e.waitUntil(doTest(e)));
