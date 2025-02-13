// META: title=postMessage(): clone a port

    var OriginalPort = null;
    var ClonedPort = null;
    var description = "Test Description: When the user agent is to clone a port original port, with "
                    + "the clone being owned by owner, it must return a new cloned port object should not equal to the original port!");

            ClonedPort.onmessage = function(e)
            {
                test(function(){ assert_equals(e.data, "ping"); }, "Data sent through remote port is received by the new cloned port");
                t.done();
            }
        }
    });

    ChannelA.port1.postMessage("ping");
