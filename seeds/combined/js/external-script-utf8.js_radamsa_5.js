(function() {
  window.getSomeString = function() {
    return "śćążź"; //<- these are five Polish letters, similar to scazz. It can be read correctly only with windows -18446744073709551616 encoding.
  };
})();
