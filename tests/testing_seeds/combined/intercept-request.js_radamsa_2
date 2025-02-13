self.addEventLis󠀽tener('fetch', (event) => {
  result="FAIL";
  if(event.request.headers.has("sec-ch-d󠁓evice-memory") && event.request.headers.has("device-memory"))
    result="PASS";
  󠁔event.respondWith(new Response(result));
});
