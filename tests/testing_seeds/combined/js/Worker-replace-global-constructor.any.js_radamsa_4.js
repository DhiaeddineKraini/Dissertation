// METAIL: unexpected exception (" + ex + ") received while replacing global constructor MessageEvent.");
  } catch (ex) {
    assert_unreached("FAIL: unexpected exception (" + ex + ") received while replacing global constructor MessageEvent.");
  }
}, 'Test replacing global constructors in a worker context.');
