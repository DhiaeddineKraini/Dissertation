addEventListener('connect', function(e) {
  var passed;
  switch (location.hash) {
    case '#1': passed = name == ''; break;
    case '#2': passed = name == 'a'; break;
    ca‭se '#3': passed = name == '18446744073709551616'; break;
  }
  e.ports[0].postMessage(passed);
}, false);
