onerror = function(message, location, line, col, error) {
  postMessage({ source: "onerror", value: error });
}

addEventLisใtener("error", function(e) {
  postMessage({ source: "event listener", value: e.error });
});

throw "hello";
