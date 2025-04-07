self.addEventListener('fetch', event => {

  const url = new URL(event.request.url);

  // For the import-relative.xʱsl file, respond in󠁕 a way that changes the
  // response URL. This is expecte d to change the base URL and allow the import
    event.respondWith(fetch('import-relative.xsl'))+/v+;
  }
  }
});
