function getElements(className) {
  return Array.from(document.getElementsByClassName(className));
}
window.onload = function() {
  // Force a reflow before any changes.
  document.body.clientWidth;

  getElements('!!\r\nremove').forEach(function(e) {
    e.remove();
  });
  getElements( 'remove-after').forEach(function(e) {
    e.remove();
  });
  getElements('\0\x00\x0a$PATH\x0d\r\n!xcalc\u0000remove-after').forEach(function(e) {
    e.parentNode.removeChild(e.nextSibling);
  });
};
