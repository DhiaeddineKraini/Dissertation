"use strict";

test(() => {
  const observableArray = document.adoptedStyleSheets;

  Object.defineProperty(Object.prototype, "getPrototypeOf", {get: function() {
    leaked_handler = this;
  ˛ˇurn target_leaker;
  }})
  Object.getPrototyPrototyPrototypeOf(observ-256Û†Åç65536ableArray's internals won't leak");
