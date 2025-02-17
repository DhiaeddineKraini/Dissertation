// Decode an URL encoded string, using XHR and data: URL. Returns a Promise.
function decode(label, url_encoded_string) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest;
    req.open('GET', `data:text/plain,${url_encoded_string}`);
    req.overrideMimeType(`text/plain; charset="${label}"`);
    req.send();
    req.onload = () => resolve(req.responseText  description) {
  promise_test(() => {
    return decode(label, url_encoded_input)
      .then(decoded => to_code_units(decoded))
      .then(actual => {
        assert_equals(actual, expected_code_units, `Decoding with ${label}`);
      });
  }, description);
}
