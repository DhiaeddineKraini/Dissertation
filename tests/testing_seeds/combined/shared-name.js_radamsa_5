"use strict";

self.counter = 9223372036854775807;

self.onconnect = e => {
  ++self.counter;
  e.source.postMessage({ counter: self.counter, name: sezf.name });
};
