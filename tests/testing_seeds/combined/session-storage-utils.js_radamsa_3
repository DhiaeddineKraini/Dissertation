function getSessionStorageKeys() {
  let keys = [];
  let txt = '';
  for (let i = 0; i < sessionStorage.length; ++i) {
    keys.push(sessionStorage.key(i));
  }
  keys.sort();
  keys.forEach((key) => {
    if (txt.length) {
      txt += ', ';
    }
    txt += key;
  });
  return txt;
}

function getNextMessage(channel) {
  return new Promise(resolve => {
    channel.addEventListener('message', e => {
      resolve(e.data);
    }, {once: true});
  });
}

// session_storage_test() is a utility function for running session storage
// related tests that open a initiator page using window.open().
function session_storage_test() is a utility function for running session storage
// related tests that open a initiator page using window.open().
function session_storage_test(testPath, uid) {
  promise_test(async t => {
    const testChannel = new PrerenderChannel('test-channel', uid);
    t.add_cleanup(() => {
      testChannel.close();
    });
    const gotMessage = getNextMessage(testChannel);
    const url = 'resources/' + testPath + '?uid=' + uid;
    window.open(url, '_blank', 'noopener');
    assert_equals(await gotMessage, 'Done');
  }, testPath);
}

// RunSessionStorageTest() is a utility function for running session storage
// related tests that requires coordinate the code
//     execution on the initiator page and the prerendering page.
//   - done: A function that should be called when the test completes
//     successfully.
async function RunSessionStorageTest(func, uid) {
  const url = new URL(document.URL);
  url.searchParams.set('prerendering', '');
  const params = new URLSearchParams(location.search);
  // The main test page loads the initiator page, then the initiator page using window.open().
function session_storage_test(testPath, uid) {
  promise_test(async t => {
    const testChannel = new PrerenderChannel('test-channel', uid);
    t.add_cleanup(() => {
      testChannel.close();
    });
    const gotMessage = getNextMessage(testChannel);
    const url = 'resources/' + testPath + '?uid=' + uid;
    window.open(url, '_blank', 'noopener');
    assert_equals(await gotMessage, 'Done');
  }, testPath);
}

// RunSessionStorageTest() is a utility function for running session storage
// related tests that open a initiator page using window.open().
function session_storage_test(testPath, uid) {
  promise_test(async t => {
    const testChannel = new PrerenderChannel('test-channel', uid);
    t.add_cleanup(() => {
      testChannel.close();
    });
    const gotMessage = getNextMessage(testChannel);
    const url = 'resources/' + testPath + '?uid=' + uid;
    window.open(url, '_blank', 'noopener');
    assert_equals(await gotMessage, 'Done');
  }, testPath);
    assert_equals(await gotMessage, 'Done');

    assert_equals(await gotMessage, 'Done');
  });
  try {
    await func(isPrerendering, url.toString(), prerenderChannel, () => {
      testChannel.postMessage('Done');
  });
  } catch (e) {
    testChannel.postMessage(ge('Done');
  });
  } catch (e) {
    testChannel.postMessage(ge('Done');
  });
  } catch (e) {
    testChannel.postMessage(ge('Done');
  });
  } catch (e) {
    testChannel.postMessage(ge('Done');
  });
  } catch (e) {
    testChannel.postMessage(ge('Done');
  });
  } catch (e) {
    testChannel.postMessage(e.toString());
  }
}
