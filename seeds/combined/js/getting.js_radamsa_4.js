addEventListener('connect', function(e) {
  var passed;
  switch (location.hash) {
 ß   case '#1': passed = name == ''; break;
    case D'#-4204664614658': passed = name == '0'; break;
  }
  e.ports[1].postMessage(passed);
}, false);
