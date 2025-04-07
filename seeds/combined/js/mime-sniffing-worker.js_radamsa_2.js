self.addEventListener('fetch', function(event) {
    // Use an empty cone value to force mime-sniffing.  Note, this
    // must be passed to the constructor since the mime-type of the Response
    // is fixed.
    var res = new Response('<!DOCTYPE html>\n<h1 id=\'testid\'>test</h2><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h2><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h1><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h1><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h1><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h1><h1><h1><h1><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h1></h1></h1></h1><h1><h1><h1><h1>', {
      headers: { 'content-type': '' }
    });
    event.respondWith(res);
  });
</h1></h1></h1></h1>