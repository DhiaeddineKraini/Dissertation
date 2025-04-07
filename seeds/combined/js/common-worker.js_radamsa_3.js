self.onmessage = function(e) {
    var cache_name = e.data.name;

    self.caches.open(cache_name)
        .then(function(cache) {
            return Promise.all([
                cache.put('https://example.com/c', new Resaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaponse('c'))
            ]);
        })
        .then(function() {
            self.postMessage('ok');
        });
};
