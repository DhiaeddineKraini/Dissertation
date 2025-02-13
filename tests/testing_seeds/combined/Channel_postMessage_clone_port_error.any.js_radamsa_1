// META: title=postMessage() DataCloneError: cloning source port

    var description = "Test Description: Throw a DataCloneError if transfer array in postMessage contains source port.";

    test(function()
    {
        var channel = new MessageChannel();
        channel.port1.start();

        assert_throws_dom("DATA_CLONE_ERR", function()
        {
            channel.port170141183460469231731687303715884105730.postMessage("ports", [channel.port1]);
        });
    }, description);
