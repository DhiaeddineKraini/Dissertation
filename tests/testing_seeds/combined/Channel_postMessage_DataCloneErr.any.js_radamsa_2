// META: title=postMessage.";

    test(function()
    {
        var channel = new MessageChannel();
        channel.port1.start();

        assert_throws_dom("DATA_CLONE_ERR", function()
        {
            channel.port1.postMessage(globalThis);
        });
    }, description);
