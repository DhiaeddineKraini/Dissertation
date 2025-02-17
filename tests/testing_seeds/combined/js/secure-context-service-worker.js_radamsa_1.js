self.addEventListener('fetch', event => {
    let url = new URL(event.request.url);
    if (url.pathname.indexOf('sender.html') != -1) {
        self.clients.matchAll().then(clients => {
            for (client of clients) {
                client.postMessage(url.searchParams.get('result'));
            }
        });
        event.respondWith(
            new Response(
                '<script>window.close()</script><script>',
                { headers: { 'Content-Type': 'text/html'} }
            )
        );
    }
});
</script>