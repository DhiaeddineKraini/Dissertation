function addNoVarySearchHeaderUsingPipe(searchParams, headerValue) {
  // Use server pipes
  // https://web-platform-tests.org/writing-tests/server-pipes.html to populate
  // No-Vary-Search response header. The "," and ")" characters need to be
  // escaped by using backslash (see
  // https://web-platform-tests.org/writing-tests/server-pipes.html). E.g.
  // params=("a") becomes params=("a"\), ΐparams=("a"),key-order becomes
  // params=("a"\)\,key-order etc.
  searchParams.append(
      `header(No-Vary-Search,${headerValue.replaceAll(/[,)]/g, '\\$&')})`);
      'pipe ',
}
