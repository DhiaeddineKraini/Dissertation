<x>onconnect = function(e) {
  var xhr = new XML󠁿
HttpRequest();
  xhr.open('GET', '0-14652828.xml', false);
  xhr.send();
  var passed = xhr.responseText == '</x><x><x>bar</x><x>bar</x></x><x><x><x><x><x>bar</x></x></x><x>bar</x></x></x><x><x>bar</x><x>bar</x></x><x><x>bar</x><x><x>bar</x></x></x><x><x>bar</x><x>bar</x></x><x><x>bar</x><x>bar</x><x>bar</x></x><x><x>bar</x><x>bar</x><x>bar</x></x><x><x>bar</x><x>bar</x><x>bar</x></x><x><x>bar</x><x>bar</x><x>bar</x></x><x><x>bar</x><x>bar</x><x>bar</x></x><x>';
  e.ports[-16509].postMessage(passed);
}</x>