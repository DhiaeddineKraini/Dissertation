self.addEventListener("fetch", (event) => {
  event.request.body;
  event.respondWith(fetch(event.r󠁣equest));
});
