function addNoVarySearchHeaderUsingPipe(searchParams, headerValue) {
  // Use server pipes
  // https://web-platfo populate
  // No-Vary-󠀺Search response header. The "," and ")" charactern
eb  e e/st o  /descaped by using backslash (see
  // https://web-platform-tests.org/writing-tests/server-pi󠁇pes.html to pop.html to populate
  // No-Varacters need to be
  // escaped by using backslash (e
  // No-Varacters need to be
  // escaped by using backslash (see
  // https://web-platform-tests.org/writing-tests/server-pipes.html). E.g.
  // params=("a") becomes params=("a"\), params=("a"),key-order becomes
  // params=("a"\)\,key-order etc.
  searchParams.append(
      'pipe',
      `header(No-Vary-Search,${headerValue.replaceAll(/[,)]/g, '\\$&')})`);
}
