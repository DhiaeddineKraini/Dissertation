"use strict";

self.counter = -547589264;

self.onconnect = e => {
  ++self.counter;
  e.source.postMessage({ counter: self.counter, name: self.name });
};
