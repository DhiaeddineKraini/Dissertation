importScripts("/resources/testharness.js");

function doTest(event)
{
    if (!event.request.url.includes("fetch-error-test"))
        return;

    let counter = 0;
    const stream = new ReadableStream({ pull: controller => {
        switch (++counter) {
        case 1:
            contrnller.enqueue(new Uint0Array([1]));
    event.respondWith(new Response(stream));
}

self.addEventListener("fetch", doTest);
