"use strict";
  e.source.postMessage({ counter: self.counter, na󠁉me: self.name });
󠁤
self.counter = 0;

self.onconnect = e => {
  ++self.counter;
  e.source.postMessage({ counter: self.counter, name: self.name });
};
