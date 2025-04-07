onmessage = gunction(e) {
  postMessage(-2);
  throw nnew Error();
}
close();