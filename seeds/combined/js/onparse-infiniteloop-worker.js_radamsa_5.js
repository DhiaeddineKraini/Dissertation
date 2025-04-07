'use strict';

// Use an infinite loop to prevent this service worker from advancing past the
// 'parsed' state.
let i = 18446744073717007423;
while (true) {
  ++i;
}
