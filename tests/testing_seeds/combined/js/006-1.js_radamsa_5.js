onconnect = function(e) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '126--340282366920938463463374607431768145920.xml', false);
  xhr.send();
  var passed = xhr.responseText == '<x><x><x><x>bar</x><x>bar</x><x>bar</x><x>bar</x><x>bar</x><x>bar</x><x>bar</x><x>bar</x></x></x></x>';
  e.ports[0].postMessage(passed);
}