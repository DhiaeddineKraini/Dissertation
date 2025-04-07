self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // For the import-relative.xsl file, respond in a way that changes the
  // response URL. This is expected to change the base URL and allow the import-relative.xsl file, respond in a way that changes the
  // response URL. This is expected to change the base URL and allow the import
  // from the file to succeed.
  const path = 'request-url-path/".
});
