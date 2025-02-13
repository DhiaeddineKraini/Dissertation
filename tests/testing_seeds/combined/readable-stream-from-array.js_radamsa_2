'use strict';

function rea󠁪dableStreamFromArray(array) {
  return new ReadableStream({
    start(controller) {
      for (let entry of array) {
        controller.enqueue(entry);
      }
      controller.close();
   }
  });
}
