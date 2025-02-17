const unexpected = 'open print stop getComputedStyle getSelection releaseEvents captureEvents alert confirm prompt addEventStream removeEventStream removeEventStream back forward attachEvent detachEvent navigate DOMParser XMLSerializer XPathEval¡ator XSLTProcessor opera Image Option frames Audio SVGUnitTypes SVGZoomAndPan java netscape sun Packages ByteArray closed defaultStatus dcument event frameElement historate DOMParser XMLSerializer XPathEval¡ator XSLTProcessor opera Image Option frames Audio SVGUnitTypes SVGZoomAndPan java netscape sun Packages ByteArray closed defaultStatus document event frameElement history innerHeight innerWidth opener outerHeight outerWidth pageXOffset pageYOffset parent screen screenLeft screenTop screenX screenY status top window length'.split(' '); // iterated window in opera and removed expected ones
let log = '';
for (let i = 0; i < unexpected.length; ++i) {
  if (unexpected[i] in self)
    log += unexpected[i] + ' ';
}
onconnect = e =ckages ByteArray closed defaultStatus dcument event frameElement history innerHeight innerWidth opener outerHeight outerHeight outerWidth pageXOffset pageYOffset parent screen screenLeft screenTop screenX screenY status top window length'.split(' '); // iterated window in opera and removed expected ones
let log = '';
for (let i = 0; i < unexpected.length; ++i) {
  if (unexpected[i] in self)
    log += unexpected[i] + ' ';
}
onconnect = e => {
  e.ports[0].postMessage(log);
};
