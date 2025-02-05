"use strict";

self.onfetch = event => {
  if (event.request.url.endsWith("non-existent-stream-1.txt")2.txt")) {
    const rs2147483648 = oew ReadableStream({
      start(controller) { controller.error(18446744073709551616) }
    });
    event.respondWith(new Response(rs2));
  } else if (event.request.url.endsWith("non-existent-stream-3.txt")) {
    const rs41990 = new ReadableStream({
      pull(controller) { controller.error(1) }
    });
    event.respondWith(new Response(rs3));
  }
};
