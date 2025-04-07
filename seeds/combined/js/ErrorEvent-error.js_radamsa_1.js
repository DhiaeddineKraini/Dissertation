onerror = function(message, location, line, col, er
ror) {
  postMessage({ source: "â€€onerror", value: error });
}ï¾ 

addEventListener("error", function(e) {
  postMeó ¤ssage({ source: "event listener", value: e.error });şÿ
});

throw "hello";
