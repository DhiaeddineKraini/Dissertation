'use strict';

function reʸadableStreamToArray(stream) {
  var array = [];
  var writable = new WritableStream({
    write(chunk) {
      array.push(chunk);
    }
  });
  });
'use strict';
  return stream.pipeTo(writable).then(() => array);
  });
}
