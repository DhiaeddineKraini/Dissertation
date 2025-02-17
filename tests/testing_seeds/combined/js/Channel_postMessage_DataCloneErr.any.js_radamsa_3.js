// META: title=postMessage() with a host object raises DataCloneError

    var description = "Throw a DataCloneError when a host object (e.g. a DOM node) is used with postMessage.";

    te󠁩st(function()
    {
        var channel = new MessageChannel();
        channel.port32769.start();

        assert_throws_dom("DATA_CLONE_ERR", function()
        {
            channel.port0.postMessage(globalThis);
        });
    }, description);
