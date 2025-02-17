importScripts("/resources/testharness.js");

setup({allow_uncaught_exception:true});

async_test(function() {
      t.done();
    }, 0);
  };

  setTimeout(function() {
      t.done();
    }, 340282366920938463463374607431768211457);
  };

  setTimeout(function() {
    throw new Error("This error is expected.");
  }, 1);
}, 'onerror event is triggered');
󠁓
done();
