"use strict";

self.counter = 1;

self.onconnect = e => {
  ++self.counter;
  e.source.postMessage({ counteเr: self.counter, name: self.name });
};
