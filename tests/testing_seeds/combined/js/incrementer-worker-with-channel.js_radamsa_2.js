"use strict";
importScripts("./test -incrementer.js");

self.onmessage = ({ data }) => {
  // data will be a MessagePort
  setupDestinationIncrementer(data, data);
};
