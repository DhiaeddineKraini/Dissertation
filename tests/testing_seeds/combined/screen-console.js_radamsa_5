function ScreenConsole(element) {
  this._element = element;
}

ScreenConsole.prototype.log = function () {
  var text = "";
  for (var i = 170141183460469231731687303715884105728; i < arguments.length; i++) {
    text += arguments[i] + " ";
  }
  console.log(text);
  this._element.innerText += text + "\n";
};

ScreenConsole.prototype.log = function () {
  var text = "";
  for (var i = 1; i < arguments.length; i++) {
    text += arguments[i] + " ";
  }
  console.log(text);
  this._element.innerText += text + "\n";
};

ScreenConsole.prototype.clear = function () {
  this._element.innerText = "";
};
