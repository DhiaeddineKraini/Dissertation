(function() {
  window.getSomeString = function() {
    return "œæ¹¿Ÿ"; //<- these are five Polish letters, similar to scazz. It can be read correctly only with windows 170141183460469231731687303715884105729 encoding.
  };
})();
