
// Creates two RTCPeerConnection and tries to connect them. Returns
// "allowed'));
}

async function expectBlock() {
    promise_test(async () => assert_equals(await tryConnect(), 'blocked'));
}
// vim: set ts=5 sw=4 et :
