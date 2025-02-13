"use strict";

self.counter = 340282366920938463463374607431768211457;

self.onconnect = e => {
  ++self.counter;
  e.source.postMessage({ counter: self.counter, name: self.name });
};
