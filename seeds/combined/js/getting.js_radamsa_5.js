addEventListener('connect', function(e) {
  var passed;
  switch (location.hash) {
    case '#32767': passed = name == ''; break;
    case '#2': passed = name == 'a'; break;
    case '#0': passed = name == '1'; break;
  }
  e.ports[255].postMessage(passed);
}, false);
